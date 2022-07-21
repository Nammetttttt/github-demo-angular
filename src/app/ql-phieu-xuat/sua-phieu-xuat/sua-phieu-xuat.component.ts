import { Component, OnInit,Input  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-phieu-xuat',
  templateUrl: './sua-phieu-xuat.component.html',
  styleUrls: ['./sua-phieu-xuat.component.css']
})
export class SuaPhieuXuatComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() phieuxuat:any;
  id_PX:any;
  sophieuxuat:any;
  ngayxuat:any;
  vitri:any;
  phongban:any;
  nhanvien:any;
  kho:any;
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
    this.taiLaiDSTaiSan()
    this.id_PX=this.phieuxuat.id_PX;
    this.sophieuxuat=this.phieuxuat.soPhieuXuat;
    this.ngayxuat=this.phieuxuat.ngayXuat;
    this.vitri=this.phieuxuat.viTriSuDung;
    this.phongban=this.phieuxuat.id_PB;
    this.nhanvien=this.phieuxuat.id_NV;
    this.kho=this.phieuxuat.id_Kho;
    this.diengiai=this.phieuxuat.dienGiai;
  }
  suaphieuxuat(){
    var val ={
      id_PX:this.id_PX,
      soPhieuXuat:this.sophieuxuat,
      ngayXuat:this.ngayxuat,
      viTriSuDung:this.vitri,
      id_PB:this.phongban,
      id_NV:this.nhanvien,
      id_Kho:this.kho,
      dienGiai:this.diengiai
    }
    this.service.SuaPhieuXuat(val).subscribe(res =>{
      
    });
    this.suaphieuxuat_ct();
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
      
    });
    
  }
  suaphieuxuat_ct(){
    var val ={
      id_PX:this.id_PX,
      tenTS:this.taisan
    }
    this.service.SuaPhieuXuat_ChiTiet(val).subscribe(res =>{
      
    })
  }
}
