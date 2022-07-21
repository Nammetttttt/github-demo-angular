import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-tai-san',
  templateUrl: './sua-tai-san.component.html',
  styleUrls: ['./sua-tai-san.component.css']
})
export class SuaTaiSanComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() taisan:any;
  id_TS:any;
  mataisan:any;
  sophieunhap:any;
  tentaisan:any;
  nhanhieu:any;
  phanloai:any;
  mota:any;
  model:any;
  DSNhanHieu:any=[];
  DSPhieuNhap:any=[];
  ngOnInit(): void {
    this.taiLaiDSNhanHieu();
    this.taiLaiDSPhieuNhap();
    this.id_TS=this.taisan.id_TS;
    this.mataisan=this.taisan.maTS;
    this.sophieunhap=this.taisan.soPhieuNhap;
    this.tentaisan=this.taisan.tenTS;
    this.nhanhieu=this.taisan.id_NH;
    this.phanloai=this.taisan.id_Loai;
    this.mota=this.taisan.moTa;
    this.model=this.taisan.model;
  }
  suataisan(){
    var val ={
      id_TS:this.id_TS,
      maTS:this.mataisan,
      soPhieuNhap:this.sophieunhap,
      tenTS:this.tentaisan,
      ten:this.nhanhieu,
      phanLoai:this.phanloai,
      moTa:this.mota,
      model:this.model
    }
    this.service.SuaTaiSan(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  };
  taiLaiDSNhanHieu(){
    this.service.layDSNhanHieu().subscribe(data => {
      
      this.DSNhanHieu = data;
      
    })
  };
  taiLaiDSPhieuNhap(){
    this.service.layDSPhieuNhap().subscribe(data => {
      
      this.DSPhieuNhap = data;
      
    })
  };
}
