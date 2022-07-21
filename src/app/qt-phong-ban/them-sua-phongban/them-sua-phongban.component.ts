import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-phongban',
  templateUrl: './them-sua-phongban.component.html',
  styleUrls: ['./them-sua-phongban.component.css']
})
export class ThemSuaPhongbanComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  tenPhongBan:any;
  ngOnInit(): void {
    
  }
  ThemPhongBan(){
    var val = {
      tenPhongBan:this.tenPhongBan
    };
    this.service.ThemPhongBan(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
