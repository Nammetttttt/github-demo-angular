import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-phong-ban',
  templateUrl: './sua-phong-ban.component.html',
  styleUrls: ['./sua-phong-ban.component.css']
})
export class SuaPhongBanComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() pban:any;
  tenPhongBan:any;
  maPhongBan:any;
  ngOnInit(): void {
    this.maPhongBan=this.pban.id_PB;
    this.tenPhongBan=this.pban.tenPhongBan;
  }
  suaphongban(){
    var val = {
      id_PB:this.maPhongBan,
      tenPhongBan:this.tenPhongBan
    };
    this.service.SuaPhongBan(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
