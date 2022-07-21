import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-nhomquyen',
  templateUrl: './them-sua-nhomquyen.component.html',
  styleUrls: ['./them-sua-nhomquyen.component.css']
})
export class ThemSuaNhomquyenComponent implements OnInit {

  constructor(private service:SharedService) { }
  ten:any;

  ngOnInit(): void {
  }
  ThemNhomQuyen(){
    var val = {
      ten:this.ten
    };
    this.service.ThemNhomQuyen(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
