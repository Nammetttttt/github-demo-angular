import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-phieuthanhly',
  templateUrl: './them-sua-phieuthanhly.component.html',
  styleUrls: ['./them-sua-phieuthanhly.component.css']
})
export class ThemSuaPhieuthanhlyComponent implements OnInit {

  constructor(private service:SharedService) { }
  sophieuthanhly:any;
  ngaythanhly:any;
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
  ThemPhieuThanhLy(){
    var val = {
      soPhieuThanhLy:this.sophieuthanhly,
      ngayThanhLy:this.ngaythanhly,
      id_NV:this.idnhanvien,
      id_Kho:this.idkho,
      dienGiai:this.diengiai
    };
    this.service.ThemPhieuThanhLy(val).subscribe(res=>{
      alert(res.toString());
    });
    this.ThemThanhLy_CT();
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
  
  ThemThanhLy_CT(){
    var val = {
      tenTS:this.taisan
    };
    this.service.ThemPhieuThanhLy_ChiTiet(val).subscribe(res=>{
      
    });
    
  }
}
