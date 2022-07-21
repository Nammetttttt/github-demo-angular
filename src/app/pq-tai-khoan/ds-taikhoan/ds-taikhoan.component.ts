import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-taikhoan',
  templateUrl: './ds-taikhoan.component.html',
  styleUrls: ['./ds-taikhoan.component.css']
})

export class DsTaikhoanComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSTaiKhoan:any=[];
   taikhoan:any;
   suaTaiKhoan:boolean=false;

  ngOnInit(): void {
    this.taiLaiDSTaiKhoan();
  }
  taiLaiDSTaiKhoan(){
    this.service.layDSTaiKhoan().subscribe(data => {
      
      this.DSTaiKhoan = data;
      
    })
  }
  chitietTaiKhoan(i:any){
    this.taikhoan=i;
    this.suaTaiKhoan=true;
  }
  dong(){
    this.suaTaiKhoan=false;
  }
  xoaTaiKhoan(i:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaTaiKhoan(i.id_TK).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    

  }
}
