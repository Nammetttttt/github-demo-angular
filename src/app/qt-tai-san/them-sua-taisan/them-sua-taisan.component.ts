import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-taisan',
  templateUrl: './them-sua-taisan.component.html',
  styleUrls: ['./them-sua-taisan.component.css']
})
export class ThemSuaTaisanComponent implements OnInit {

  constructor(private service:SharedService) { }
  mats:any;
  idphieunhap:any;
  ten:any;
  idnh:any;
  idloai:any;
  mota:any;
  model:any;
  DSLoaiTS:any=[];
  DSNhanHieu:any=[];
  ngOnInit(): void {
    this.taiLaiDSNhanHieu();
    this.taiLaiDSLoaiTS();
  }
  ThemTaiSan(){
    var val = {
      maTS:this.mats,
      // id_PN:this.idphieunhap,
      tenTS:this.ten,
      ten:this.idnh,
      phanLoai:this.idloai,
      moTa:this.mota,
      model:this.model
    };
    this.service.ThemTaiSan(val).subscribe(res=>{
      alert(res.toString());
    });
    this.dong();
  }
  
  dong(){
    location.reload();
  };
  taiLaiDSNhanHieu(){
    this.service.layDSNhanHieu().subscribe(data => {
      
      this.DSNhanHieu = data;
      
    })
  };
  taiLaiDSLoaiTS(){
    this.service.layDSLoaiTS().subscribe(data => {
      
      this.DSLoaiTS = data;
      
    })
  };
}
