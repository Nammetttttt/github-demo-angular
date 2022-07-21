import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sua-loai-ts',
  templateUrl: './sua-loai-ts.component.html',
  styleUrls: ['./sua-loai-ts.component.css']
})
export class SuaLoaiTsComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() loai:any;
  id_Loai:any;
  nhomLoai:any;
  ten:any;
  phanLoai:any;
  moTa:any;
  ngOnInit(): void {
    this.id_Loai=this.loai.id_Loai;
    this.nhomLoai=this.loai.nhomLoai;
    this.ten=this.loai.ten;
    this.phanLoai=this.loai.phanLoai;
    this.moTa=this.loai.moTa;
  }
  sualoai(){
    var val ={
      id_Loai:this.id_Loai,
      nhomLoai:this.nhomLoai,
      ten:this.ten,
      phanLoai:this.phanLoai,
      moTa:this.moTa
    }
    this.service.SuaLoaiTS(val).subscribe(res =>{
      alert(res.toString());
    })
    location.reload();
  }
}
