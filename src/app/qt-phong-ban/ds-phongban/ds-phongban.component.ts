import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phongban',
  templateUrl: './ds-phongban.component.html',
  styleUrls: ['./ds-phongban.component.css']
})
export class DsPhongbanComponent implements OnInit {

  constructor(private service:SharedService) {}
   pban:any;
   DSPhongBan:any=[];
  suaphongban:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSPhongBan();
    
  }
  taiLaiDSPhongBan(){
    this.service.layDSPhongBan().subscribe(data => {
      
      this.DSPhongBan = data;
      
    })
  }
  chitietpban(pBan:any){
    this.pban=pBan;
    this.suaphongban=true;
  }
  dong(){
    this.suaphongban=false;
  }
  xoapban(pBan:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaPhongBan(pBan.id_PB).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
