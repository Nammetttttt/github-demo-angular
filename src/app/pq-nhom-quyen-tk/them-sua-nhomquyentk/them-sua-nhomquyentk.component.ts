import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-nhomquyentk',
  templateUrl: './them-sua-nhomquyentk.component.html',
  styleUrls: ['./them-sua-nhomquyentk.component.css']
})
export class ThemSuaNhomquyentkComponent implements OnInit {

  constructor(private service:SharedService) { }
  taikhoan:any;
  nhomquyen:any;
  ngOnInit(): void {
  }
  ThemNhomQuyen_TK(){
    var val = {
      id_TK:this.taikhoan,
      id_NQ:this.nhomquyen
    };
    this.service.ThemNhomQuyen_TK(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
