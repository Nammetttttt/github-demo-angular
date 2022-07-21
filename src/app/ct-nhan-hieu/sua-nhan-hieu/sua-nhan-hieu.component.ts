import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-nhan-hieu',
  templateUrl: './sua-nhan-hieu.component.html',
  styleUrls: ['./sua-nhan-hieu.component.css']
})
export class SuaNhanHieuComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() nhanhieu:any;
  id_NH:any;
  ten:any;
  ngOnInit(): void {
    this.id_NH=this.nhanhieu.id_NH;
    this.ten=this.nhanhieu.ten;
  }
  suanhanhieu(){
    var val ={
      id_NH:this.id_NH,
      ten:this.ten,
    }
    this.service.SuaNhanHieu(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
