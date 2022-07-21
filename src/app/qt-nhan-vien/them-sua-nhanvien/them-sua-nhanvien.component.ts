import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-nhanvien',
  templateUrl: './them-sua-nhanvien.component.html',
  styleUrls: ['./them-sua-nhanvien.component.css']
})
export class ThemSuaNhanvienComponent implements OnInit {

  constructor(private service:SharedService) { }
  idphong:any;
  ten:any;
  ngaysinh:any;
  sdt:any;
  mail:any;
  chucvu:any;
  DSPhongBan:any=[];
  ngOnInit(): void {
    this.taiLaiDSPhongBan();
  }
  ThemNhanVien(){
    var val = {
      id_PB:this.idphong,
      tenNV:this.ten,
      ngaySinh:this.ngaysinh,
      sdt:this.sdt,
      mail:this.mail,
      chucVu:this.chucvu
    };
    this.service.ThemNhanVien(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
  taiLaiDSPhongBan(){
    this.service.layDSPhongBan().subscribe(data => {
      
      this.DSPhongBan = data;
      
    })
  }
}
