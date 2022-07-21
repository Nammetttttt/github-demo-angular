import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-them-sua-chucnang',
  templateUrl: './them-sua-chucnang.component.html',
  styleUrls: ['./them-sua-chucnang.component.css']
})
export class ThemSuaChucnangComponent implements OnInit {

  constructor(private service:SharedService) { }
  moTa:any;
  ngOnInit(): void {
  }
  ThemChucNang(){
    var val = {
      moTa:this.moTa
    };
    this.service.ThemChucNang(val).subscribe(res=>{
      alert(res.toString());
    });
    alert("Thêm thành công");
    location.reload();
  }
}
