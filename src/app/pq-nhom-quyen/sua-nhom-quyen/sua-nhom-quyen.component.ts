import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-nhom-quyen',
  templateUrl: './sua-nhom-quyen.component.html',
  styleUrls: ['./sua-nhom-quyen.component.css']
})
export class SuaNhomQuyenComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() nhomquyen:any;
  id_NQ:any;
  ten:any;
  ngOnInit(): void {
    this.id_NQ=this.nhomquyen.id_NQ;
    this.ten=this.nhomquyen.ten;
  }
  suanhomquyen(){
    var val ={
      id_NQ:this.id_NQ,
      ten:this.ten
    }
    this.service.SuaNhomQuyen(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
