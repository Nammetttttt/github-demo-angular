import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-taisan',
  templateUrl: './ds-taisan.component.html',
  styleUrls: ['./ds-taisan.component.css']
})
export class DsTaisanComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSTaiSan:any=[];
   taisan:any;
   a:number = 0;
   suataisan:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSTaiSan();
  }
  taiLaiDSTaiSan(){
    this.service.layDSTaiSan().subscribe(data => {
      
      this.DSTaiSan = data;
      
    });
    
  }

  chitietTaisan(tAisan:any){
    this.taisan=tAisan;
    this.suataisan=true;
  }
  dong(){
    this.suataisan=false;
  }
  xoaTaisan(tAisan:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaTaiSan(tAisan.id_TS).subscribe(
        data=>{
          
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
