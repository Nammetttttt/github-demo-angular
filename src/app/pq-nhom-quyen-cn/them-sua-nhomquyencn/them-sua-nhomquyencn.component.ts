import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-nhomquyencn',
  templateUrl: './them-sua-nhomquyencn.component.html',
  styleUrls: ['./them-sua-nhomquyencn.component.css']
})
export class ThemSuaNhomquyencnComponent implements OnInit {

  constructor(private service:SharedService) { }
  chucnang:any;
  nhomquyen:any;
  ngOnInit(): void {
  }
  ThemNhomQuyen_CN(){
    var val = {
      id_CN:this.chucnang,
      id_NQ:this.nhomquyen
    };
    this.service.ThemNhomQuyen_CN(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
