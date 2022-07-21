import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieuxuat',
  templateUrl: './ds-phieuxuat.component.html',
  styleUrls: ['./ds-phieuxuat.component.css']
})
export class DsPhieuxuatComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSPhieuXuat:any=[];
   phieuxuat:any;
   suaphieuxuat:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSPhieuXuat();
  }
  taiLaiDSPhieuXuat(){
    this.service.layDSPhieuXuat().subscribe(data => {
      
      this.DSPhieuXuat = data;
      
    })
  }
  chitietPhieuxuat(pHieuxuat:any){
    this.phieuxuat=pHieuxuat;
    this.suaphieuxuat=true;
  }
  dong(){
    this.suaphieuxuat=false;
  }
  xoaPhieuxuat(pHieuxuat:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaPhieuXuat(pHieuxuat.id_PX).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
