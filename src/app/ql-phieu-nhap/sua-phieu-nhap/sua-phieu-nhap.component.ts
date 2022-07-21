import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-phieu-nhap',
  templateUrl: './sua-phieu-nhap.component.html',
  styleUrls: ['./sua-phieu-nhap.component.css']
})
export class SuaPhieuNhapComponent implements OnInit {

  constructor(private service:SharedService) { }
  DSNhanVien:any=[];
  DSTaiKhoan:any=[];
  DSKho:any=[];
  @Input() phieunhap:any;
  id_PN:any;
  sophieunhap:any;
  ngaynhap:any;
  nhanvien:any;
  taikhoan:any;
  kho:any;
  diengiai:any;
  
  ngOnInit(): void {
    this.taiLaiDSNhanVien();
    this.taiLaiDSTaiKhoan();
    this.taiLaiDSKho();
    this.id_PN=this.phieunhap.id_PN;
    this.sophieunhap=this.phieunhap.soPhieuNhap;
    this.ngaynhap=this.phieunhap.ngayNhap;
    this.nhanvien=this.phieunhap.tenNV;
    this.taikhoan=this.phieunhap.tenTK;
    this.kho=this.phieunhap.moTa;
    this.diengiai=this.phieunhap.dienGiai;
    
  }
  suaphieunhap(){
    var val ={
      id_PN:this.id_PN,
      soPhieuNhap:this.sophieunhap,
      ngayNhap:this.ngaynhap,
      id_NV:this.nhanvien,
      id_TK:this.taikhoan,
      id_Kho:this.kho,
      dienGiai:this.diengiai
    }
    this.service.SuaPhieuNhap(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
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
