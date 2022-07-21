import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-kho',
  templateUrl: './ds-kho.component.html',
  styleUrls: ['./ds-kho.component.css']
})
export class DsKhoComponent implements OnInit {

  constructor(private service:SharedService) {}
   kho:any;
   DSKho:any=[];
  suakho:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSKho();
  }
  taiLaiDSKho(){
    this.service.layDSKho().subscribe(data => {
      
      this.DSKho = data;
      
    })
  }
  chitietkho(kHo:any){
    this.kho=kHo;
    this.suakho=true;
  }
  dong(){
    this.suakho=false;
  }
  xoaKho(kHo:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaKho(kHo.id_Kho).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
   
  }
}
