import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-phieu-thanh-ly',
  templateUrl: './sua-phieu-thanh-ly.component.html',
  styleUrls: ['./sua-phieu-thanh-ly.component.css']
})
export class SuaPhieuThanhLyComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() phieuthanhly:any;
  id_PTL:any;
  sophieuthanhly:any;
  ngaythanhly:any;
  nhanvien:any;
  kho:any;
  id_NV:any;
  id_Kho:any
  diengiai:any;
  DSNhanVien:any=[];
  DSKho:any=[];
  DSTaiSan:any=[];
  taisan:any;
  ngOnInit(): void {
    this.taiLaiDSNhanVien();
    this.taiLaiDSKho();
    this.taiLaiDSTaiSan()
    this.id_PTL=this.phieuthanhly.id_PTL;
    this.sophieuthanhly=this.phieuthanhly.soPhieuThanhLy;
    this.ngaythanhly=this.phieuthanhly.ngayThanhLy;
    this.nhanvien=this.phieuthanhly.id_NV;
    this.kho=this.phieuthanhly.id_Kho;
    this.diengiai=this.phieuthanhly.dienGiai;
  }
  suaphieuthanhly(){
    var val ={
      id_PTL:this.id_PTL,
      soPhieuThanhLy:this.sophieuthanhly,
      ngayThanhLy:this.ngaythanhly,
      id_NV:this.nhanvien,
      id_Kho:this.kho,
      dienGiai:this.diengiai
    }
    this.service.SuaPhieuThanhLy(val).subscribe(res =>{
      alert(res.toString());
    })
    this.suaphieuthanhly_ct();
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
  suaphieuthanhly_ct(){
    var val ={
      id_PTL:this.id_PTL,
      tenTS:this.taisan
    }
    this.service.SuaPhieuThanhLy_ChiTiet(val).subscribe(res =>{
      
    })
  }
}
