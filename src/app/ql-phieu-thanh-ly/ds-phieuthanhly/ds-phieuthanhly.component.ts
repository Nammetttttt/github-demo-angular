import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieuthanhly',
  templateUrl: './ds-phieuthanhly.component.html',
  styleUrls: ['./ds-phieuthanhly.component.css']
})
export class DsPhieuthanhlyComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSPhieuThanhLy:any=[];
   phieuthanhly:any;
   suaphieuthanhly:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSPhieuThanhLy();
  }
  taiLaiDSPhieuThanhLy(){
    this.service.layDSPhieuThanhLy().subscribe(data => {
      
      this.DSPhieuThanhLy = data;
      
    })
  }
  chitietPhieuthanhly(pHieuthanhly:any){
    this.phieuthanhly=pHieuthanhly;
    this.suaphieuthanhly=true;
  }
  dong(){
    this.suaphieuthanhly=false;
  }
  xoaPhieuthanhly(pHieuthanhly:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaPhieuThanhLy(pHieuthanhly.id_PTL).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
