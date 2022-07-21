import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-taikhoan',
  templateUrl: './them-sua-taikhoan.component.html',
  styleUrls: ['./them-sua-taikhoan.component.css']
})
export class ThemSuaTaikhoanComponent implements OnInit {

  constructor(private service:SharedService) { }
  tenTaiKhoan:any;
  matkhau:any;
  DSNhomQuyen:any=[];
  nhomquyen:any;
  @Input() taiKhoan:any;

  ngOnInit(): void {
    this.taiLaiDSNhomQuyen();
  }
  ThemTaiKhoan(){
    var val = {
      tenTK:this.tenTaiKhoan,
      matKhau:this.matkhau,
      ten:this.nhomquyen
    };
    this.service.ThemTaiKhoan(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thềm thành công");
    location.reload();
    
  }
  taiLaiDSNhomQuyen(){
    this.service.layDSNhomQuyen().subscribe(data => {
      
      this.DSNhomQuyen = data;
      
    })
  }
}
