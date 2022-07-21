import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
// import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-pq-tai-khoan-dn',
  templateUrl: './pq-tai-khoan-dn.component.html',
  styleUrls: ['./pq-tai-khoan-dn.component.css']
})
export class PQTaiKhoanDNComponent implements OnInit {

  constructor(private service:SharedService/* private router: RouterModule */) { }
  table:any = [];
  DSNguoiDung:any = [];
  nDung:any={
    TenTK:"ADMIN3",
    matKhau:"123"
  }
  tenTaiKhoan:any;
  matKhau:any;
  check: boolean = false;
  ngOnInit(): void {
    
  }
  // dangNhap(){
  //   this.service.layDSNguoiDung(this.nDung).subscribe(data=>{
  //     this.DSNguoiDung = data;
  //   })
  // }
  dangNhap(){
    var val = {
      tenTK:this.tenTaiKhoan,
      matKhau:this.matKhau
    };
    // var val1 = {
    //   Ten_TK:this.tenTaiKhoan,
    //   MatKhau:this.matKhau
    // };
    
    this.service.layDSNguoiDung(this.nDung).subscribe(ref =>{
      alert(ref.toString());
    });
    // this.tailaiDSNG();
    // this.service.layDSNguoiDung(val).subscribe(data => {
      
    //   this.DSNguoiDung = data;
    //   alert("In đc");
    // });
  }
  
  tailaiDSNG(){
    var val = {
      tenTK:this.tenTaiKhoan,
      matKhau:this.matKhau
    };
    this.service.layDSNguoiDung(val).subscribe(data => {
      
      this.DSNguoiDung = data,
      this.table = data;
      // alert(this.DSNguoiDung.tenTK);
      if(this.DSNguoiDung.tenTK == null)
      {
      // alert("Dang nhap thanh cong");
      alert("Dang nhap that bai");
      // window.location.href = "http://localhost:4200/taikhoan";
      // this.router.navigate(['http://localhost:4200/taikhoan']);
      }
      else {
        window.location.href = "http://localhost:4200/taikhoan";
        alert("Dang nhap thanh cong");}
        this.check = true;
        
    });
    
    
    
    // alert("In đc");
    // alert("tenTK");
  }
}
