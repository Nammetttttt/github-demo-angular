import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieuthuhoi',
  templateUrl: './ds-phieuthuhoi.component.html',
  styleUrls: ['./ds-phieuthuhoi.component.css']
})
export class DsPhieuthuhoiComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSPhieuThuHoi:any=[];
   phieuthuhoi:any;
   suaphieuthuhoi:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSPhieuThuHoi();
  }
  taiLaiDSPhieuThuHoi(){
    this.service.layDSPhieuThuHoi().subscribe(data => {
      
      this.DSPhieuThuHoi = data;
      
    })
  }
  chitietPhieuthuhoi(pHieuthuhoi:any){
    this.phieuthuhoi=pHieuthuhoi;
    this.suaphieuthuhoi=true;
  }
  dong(){
    this.suaphieuthuhoi=false;
  }
  xoaPhieuthuhoi(pHieuthuhoi:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaPhieuThuHoi(pHieuthuhoi.id_PTL).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
