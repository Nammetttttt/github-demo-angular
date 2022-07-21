import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-phieunhap',
  templateUrl: './them-sua-phieunhap.component.html',
  styleUrls: ['./them-sua-phieunhap.component.css']
})
export class ThemSuaPhieunhapComponent implements OnInit {

  constructor(private service:SharedService) { }
  sophieunhap:any;
  ngaynhap:any;
  idnhanvien:any;
  idtaikhoan:any;
  idkho:any;
  diengiai:any;
  themtaisan:boolean=true;
  DSNhanVien:any=[];
  DSTaiKhoan:any=[];
  DSKho:any=[];
  ngOnInit(): void {
    this.themtaisan=true;
    this.taiLaiDSNhanVien();
    this.taiLaiDSTaiKhoan();
    this.taiLaiDSKho();
  }
  ThemPhieuNhap(){
    var val = {
      soPhieuNhap:this.sophieunhap,
      ngayNhap:this.ngaynhap,
      id_NV:this.idnhanvien,
      id_TK:this.idtaikhoan,
      id_Kho:this.idkho,
      dienGiai:this.diengiai
    };
    this.service.ThemPhieuNhap(val).subscribe(res=>{
      alert(res.toString());
    });
    
    this.themtaisan=false;
    // alert("Thêm thành công");
    // location.reload();
  }
  taiLaiDSNhanVien(){
    this.service.layDSNhanVien().subscribe(data => {
      
      this.DSNhanVien = data;
      
    })
  }
  taiLaiDSTaiKhoan(){
    this.service.layDSTaiKhoan().subscribe(data => {
      
      this.DSTaiKhoan = data;
      
    })
  }
  taiLaiDSKho(){
    this.service.layDSKho().subscribe(data => {
      
      this.DSKho = data;
      
    })
  }
}
