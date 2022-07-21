import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-chucnang',
  templateUrl: './ds-chucnang.component.html',
  styleUrls: ['./ds-chucnang.component.css']
})
export class DsChucnangComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSChucNang:any=[];
   chucnang:any;
   suachucnang:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSChucNang();
  }
  taiLaiDSChucNang(){
    this.service.layDSChucNang().subscribe(data => {
      
      this.DSChucNang = data;
      
    })
  }
  chitietChucnang(cHucnang:any){
    this.chucnang=cHucnang;
    this.suachucnang=true;
  }
  dong(){
    this.suachucnang=false;
  }
  xoaChucnang(cHucnang:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaChucNang(cHucnang.id_CN).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
}
