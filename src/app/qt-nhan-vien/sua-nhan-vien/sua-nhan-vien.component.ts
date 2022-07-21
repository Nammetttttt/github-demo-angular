import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-nhan-vien',
  templateUrl: './sua-nhan-vien.component.html',
  styleUrls: ['./sua-nhan-vien.component.css']
})
export class SuaNhanVienComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() nhanvien:any;
  id_NV:any;
  phongban:any;
  ten:any;
  ngaysinh:any;
  sdt:any;
  DSPhongBan:any=[];
  mail:any;
  chucvu:any;
  ngOnInit(): void {
    this.taiLaiDSPhongBan();
    this.id_NV=this.nhanvien.id_NV;
    this.phongban=this.nhanvien.id_PB;
    this.ten=this.nhanvien.tenNV;
    this.ngaysinh=this.nhanvien.ngaySinh;
    this.sdt=this.nhanvien.sdt;
    this.mail=this.nhanvien.mail;
    this.chucvu=this.nhanvien.chucVu;
  }
  suanhanvien(){
    var val ={
      id_NV:this.id_NV,
      id_PB:this.phongban,
      tenNV:this.ten,
      ngaySinh:this.ngaysinh,
      sdt:this.sdt,
      mail:this.mail,
      chucVu:this.chucvu
    }
    this.service.SuaNhanVien(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
  taiLaiDSPhongBan(){
    this.service.layDSPhongBan().subscribe(data => {
      
      this.DSPhongBan = data;
      
    })
  }
}
