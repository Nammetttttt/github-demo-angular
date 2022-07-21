import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-tai-khoan',
  templateUrl: './sua-tai-khoan.component.html',
  styleUrls: ['./sua-tai-khoan.component.css']
})
export class SuaTaiKhoanComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() taikhoan:any;
  id_TK:any;
  tenTK:any;
  matKhau:any;
  DSNhomQuyen:any=[];
  ten:any;
  ngOnInit(): void {
    this.taiLaiDSNhomQuyen();
    this.id_TK=this.taikhoan.id_TK;
    this.tenTK=this.taikhoan.tenTK;
    this.matKhau=this.taikhoan.matKhau;
  }
  suataikhoan(){
    var val ={
      id_TK:this.id_TK,
      tenTK:this.tenTK,
      matKhau:this.matKhau,
      ten:this.ten
    }
    this.service.SuaTaiKhoan(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
  taiLaiDSNhomQuyen(){
    this.service.layDSNhomQuyen().subscribe(data => {
      
      this.DSNhomQuyen = data;
      
    })
  }
}
