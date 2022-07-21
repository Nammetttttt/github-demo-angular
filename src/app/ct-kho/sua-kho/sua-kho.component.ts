import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-kho',
  templateUrl: './sua-kho.component.html',
  styleUrls: ['./sua-kho.component.css']
})
export class SuaKhoComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() kho:any;
  moTa:any;
  maKho:any;
  ngOnInit(): void {
    this.maKho=this.kho.id_Kho;
    this.moTa=this.kho.moTa;
  }
  suakho(){
    var val = {
      id_Kho:this.maKho,
      moTa:this.moTa
    };
    this.service.SuaKho(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
