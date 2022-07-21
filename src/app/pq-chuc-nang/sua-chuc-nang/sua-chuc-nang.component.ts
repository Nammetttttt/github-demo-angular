import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-chuc-nang',
  templateUrl: './sua-chuc-nang.component.html',
  styleUrls: ['./sua-chuc-nang.component.css']
})
export class SuaChucNangComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() chucnang:any;
  id_CN:any;
  moTa:any;
  ngOnInit(): void {
    this.id_CN=this.chucnang.id_CN;
    this.moTa=this.chucnang.moTa;
  }
  suachucnang(){
    var val ={
      id_CN:this.id_CN,
      moTa:this.moTa
    }
    this.service.SuaChucNang(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
