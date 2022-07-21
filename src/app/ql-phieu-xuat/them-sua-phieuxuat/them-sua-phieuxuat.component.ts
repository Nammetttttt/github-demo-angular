import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-phieuxuat',
  templateUrl: './them-sua-phieuxuat.component.html',
  styleUrls: ['./them-sua-phieuxuat.component.css']
})
export class ThemSuaPhieuxuatComponent implements OnInit {

  constructor(private service:SharedService) { }
  sophieuxuat:any;
  ngayxuat:any;
  vitrisudung:any;
  idphongban:any;
  idnhanvien:any;
  idkho:any;
  diengiai:any;
  DSNhanVien:any=[];
  DSKho:any=[];
  DSPhongBan:any=[];
  DSPhieuXuat:any=[];
  DSTaiSan:any=[];
  taisan:any;
  ngOnInit(): void {
    this.taiLaiDSNhanVien();
    this.taiLaiDSKho();
    this.taiLaiDSPhongBan();
    this.taiLaiDSPhieuXuat();
    this.taiLaiDSTaiSan();
  }
  ThemPhieuXuat(){
    var val = {
      soPhieuXuat:this.sophieuxuat,
      ngayXuat:this.ngayxuat,
      viTriSuDung:this.vitrisudung,
      id_PB:this.idphongban,
      id_NV:this.idnhanvien,
      id_Kho:this.idkho,
      dienGiai:this.diengiai
    };
    this.service.ThemPhieuXuat(val).subscribe(res=>{
      alert(res.toString());
    });
    this.ThemXuat_CT();
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
  taiLaiDSPhongBan(){
    this.service.layDSPhongBan().subscribe(data => {
      
      this.DSPhongBan = data;
      
    })
  }
  taiLaiDSPhieuXuat(){
    this.service.layDSPhieuXuat().subscribe(data => {
      
      this.DSPhieuXuat = data;
      
    })
  }
  taiLaiDSTaiSan(){
    this.service.layDSTaiSan().subscribe(data => {
      
      this.DSTaiSan = data;
      
    })
  }
  ThemXuat_CT(){
    var val = {
      tenTS:this.taisan
    };
    this.service.ThemPhieuXuat_ChiTiet(val).subscribe(res=>{
      
    });
    
  }
}
