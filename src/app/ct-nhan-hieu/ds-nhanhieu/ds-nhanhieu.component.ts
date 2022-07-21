import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-nhanhieu',
  templateUrl: './ds-nhanhieu.component.html',
  styleUrls: ['./ds-nhanhieu.component.css']
})
export class DsNhanhieuComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSNhanHieu:any=[];
   nhanhieu:any;
   suanhanhieu:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSNhanHieu();
  }
  taiLaiDSNhanHieu(){
    this.service.layDSNhanHieu().subscribe(data => {
      
      this.DSNhanHieu = data;
      
    })
  }
  chitietNhanhieu(nHanhieu:any){
    this.nhanhieu=nHanhieu;
    this.suanhanhieu=true;
  }
  dong(){
    this.suanhanhieu=false;
  }
  xoaNhanhieu(nHanhieu:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaNhanHieu(nHanhieu.id_NH).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
  }
}
