import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-loai',
  templateUrl: './them-sua-loai.component.html',
  styleUrls: ['./them-sua-loai.component.css']
})
export class ThemSuaLoaiComponent implements OnInit {

  constructor(private service:SharedService) { }
  tenLoai:any;
  phanLoai:any;
  moTa:any;
  nhomLoai:any;
  ngOnInit(): void {
  }
  ThemLoai(){
    var val = {
      nhomLoai:this.nhomLoai,
      ten:this.tenLoai,
      phanLoai:this.phanLoai,
      moTa:this.moTa
    };
    this.service.ThemLoaiTS(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
