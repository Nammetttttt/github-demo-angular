import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieunhap',
  templateUrl: './ds-phieunhap.component.html',
  styleUrls: ['./ds-phieunhap.component.css']
})
export class DsPhieunhapComponent implements OnInit {

  constructor(private service:SharedService) {}
  //  @Input() themtaisan:any;
   DSPhieuNhap:any=[];
   phieunhap:any;
   suaphieunhap:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSPhieuNhap();
  }
  taiLaiDSPhieuNhap(){
    this.service.layDSPhieuNhap().subscribe(data => {
      
      this.DSPhieuNhap = data;
      
    })
  }
  chitietPhieunhap(pHieunhap:any){
    this.phieunhap=pHieunhap;
    this.suaphieunhap=true;
  }
  dong(){
    this.suaphieunhap=false;
  }
  xoaPhieunhap(pHieunhap:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaPhieuNhap(pHieunhap.id_PN).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
