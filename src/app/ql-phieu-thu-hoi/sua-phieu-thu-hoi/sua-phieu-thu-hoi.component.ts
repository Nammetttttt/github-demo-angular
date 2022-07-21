import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-phieu-thu-hoi',
  templateUrl: './sua-phieu-thu-hoi.component.html',
  styleUrls: ['./sua-phieu-thu-hoi.component.css']
})
export class SuaPhieuThuHoiComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() phieuthuhoi:any;
  id_PTH:any;
  sophieuthuhoi:any;
  ngaythuhoi:any;
  nhanvien:any;
  kho:any;
  diengiai:any;
  DSNhanVien:any=[];
  DSKho:any=[];
  DSTaiSan:any=[];
  taisan:any;
  ngOnInit(): void {
    this.taiLaiDSNhanVien();
    this.taiLaiDSKho();
    this.taiLaiDSTaiSan()
    this.id_PTH=this.phieuthuhoi.id_PTH;
    this.sophieuthuhoi=this.phieuthuhoi.soPhieuTH;
    this.ngaythuhoi=this.phieuthuhoi.ngayThuHoi;
    this.nhanvien=this.phieuthuhoi.id_NV;
    this.kho=this.phieuthuhoi.id_Kho;
    this.diengiai=this.phieuthuhoi.dienGiai;
  }
  suaphieuthuhoi(){
    var val ={
      id_PTH:this.id_PTH,
      soPhieuTH:this.sophieuthuhoi,
      ngayThuHoi:this.ngaythuhoi,
      id_NV:this.nhanvien,
      id_Kho:this.kho,
      dienGiai:this.diengiai
    }
    this.service.SuaPhieuThuHoi(val).subscribe(res =>{
      
    })
    this.suaphieuthuhoi_ct();
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
      
    });
    
  }
  suaphieuthuhoi_ct(){
    var val ={
      id_PTH:this.id_PTH,
      tenTS:this.taisan
    }
    this.service.SuaPhieuThuHoi_ChiTiet(val).subscribe(res =>{
      
    })
  }
}
