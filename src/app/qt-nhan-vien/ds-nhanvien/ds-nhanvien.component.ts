import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-nhanvien',
  templateUrl: './ds-nhanvien.component.html',
  styleUrls: ['./ds-nhanvien.component.css']
})
export class DsNhanvienComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSNhanVien:any=[];
   nhanvien:any;
   suanhanvien:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSNhanVien();
  }
  taiLaiDSNhanVien(){
    this.service.layDSNhanVien().subscribe(data => {
      
      this.DSNhanVien = data;
      
    })
  }
  chitietNhanvien(nHanvien:any){
    this.nhanvien=nHanvien;
    this.suanhanvien=true;
  }
  dong(){
    this.suanhanvien=false;
  }
  xoaNhanvien(nHanvien:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaNhanVien(nHanvien.id_NV).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
