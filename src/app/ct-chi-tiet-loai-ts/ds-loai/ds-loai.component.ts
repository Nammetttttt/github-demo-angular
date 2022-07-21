import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-loai',
  templateUrl: './ds-loai.component.html',
  styleUrls: ['./ds-loai.component.css']
})
export class DsLoaiComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSLoaiTS:any=[];
   loai:any;
   sualoai:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSLoaiTS();
  }
  taiLaiDSLoaiTS(){
    this.service.layDSLoaiTS().subscribe(data => {
      
      this.DSLoaiTS = data;
      
    })
  }
  chitietLoai(a:any){
    this.loai=a;
    this.sualoai=true;
  }
  dong(){
    this.sualoai=false;
  }
  xoaLoaiTS(a:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaLoaiTS(a.id_Loai).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
