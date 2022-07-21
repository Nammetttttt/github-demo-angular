import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-kho',
  templateUrl: './them-sua-kho.component.html',
  styleUrls: ['./them-sua-kho.component.css']
})
export class ThemSuaKhoComponent implements OnInit {

  constructor(private service:SharedService) { }
  moTa:any;
  ngOnInit(): void {
  }
  ThemKho(){
    var val = {
      moTa:this.moTa
    };
    this.service.ThemKho(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
