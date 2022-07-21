import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-nhanhieu',
  templateUrl: './them-sua-nhanhieu.component.html',
  styleUrls: ['./them-sua-nhanhieu.component.css']
})
export class ThemSuaNhanhieuComponent implements OnInit {

  constructor(private service:SharedService) { }
  ten:any;
  ngOnInit(): void {
  }
  ThemNhanHieu(){
    var val = {
      ten:this.ten
    };
    this.service.ThemNhanHieu(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
