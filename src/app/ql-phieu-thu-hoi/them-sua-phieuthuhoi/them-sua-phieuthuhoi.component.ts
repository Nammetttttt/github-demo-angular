import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-phieuthuhoi',
  templateUrl: './them-sua-phieuthuhoi.component.html',
  styleUrls: ['./them-sua-phieuthuhoi.component.css']
})
export class ThemSuaPhieuthuhoiComponent implements OnInit {

  constructor(private service:SharedService) { }
  sophieuthuhoi:any;
  ngaythuhoi:any;
  idnhanvien:any;
  idkho:any;
  diengiai:any;
  DSNhanVien:any=[];
  DSKho:any=[];
  DSTaiSan:any=[];
  taisan:any;
  ngOnInit(): void {
    this.taiLaiDSNhanVien();
    this.taiLaiDSKho();
    this.taiLaiDSTaiSan();
  }
  ThemPhieuThuHoi(){
    var val = {
      soPhieuTH:this.sophieuthuhoi,
      ngayThuHoi:this.ngaythuhoi,
      id_NV:this.idnhanvien,
      id_Kho:this.idkho,
      dienGiai:this.diengiai
    };
    this.service.ThemPhieuThuHoi(val).subscribe(res=>{
      alert(res.toString());
    });
    this.ThemThuHoi_CT();
    alert("Thêm thành công");
    location.reload();
  }
  taiLaiDSNhanVien(){
    this.service.layDSNhanVien().subscribe(data => {
      
      this.DSNhanVien = data;
      
    })
  }
  taiLaiDSKho(){
    this.service.layDSKho().subscribe(data => {
      
      this.DSKho = data;
      
    })
  }
  taiLaiDSTaiSan(){
    this.service.layDSTaiSan().subscribe(data => {
      
      this.DSTaiSan = data;
      
    })
  }
  ThemThuHoi_CT(){
    var val = {
      tenTS:this.taisan
    };
    this.service.ThemPhieuThuHoi_ChiTiet(val).subscribe(res=>{
      
    });
    
  }
}
