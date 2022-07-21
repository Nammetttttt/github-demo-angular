import { PQTaiKhoanDNComponent } from './pq-tai-khoan-dn/pq-tai-khoan-dn.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QLTS_FE';
  showme: boolean = false;
  ngOnInit(): void {
    if(location.href == "http://localhost:4200/"){
      // alert("Chào mừng bạn đến với hệ thống quản lý tài sản")
      window.location.href = 'http://localhost:4200/DangNhap';
    }
    if(location.href == "http://localhost:4200/DangNhap"){
      this.showme = false;
      
    }else {
      this.showme = true;
    }
    
  }
  loadlai(){
    // this.showme = true;
    if(location.origin == "http://localhost:4200"){
      this.showme = false;
      
    }else {
      this.showme = false;
      
    }
  }
}

