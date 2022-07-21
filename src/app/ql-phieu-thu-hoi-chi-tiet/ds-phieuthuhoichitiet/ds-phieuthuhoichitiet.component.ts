import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieuthuhoichitiet',
  templateUrl: './ds-phieuthuhoichitiet.component.html',
  styleUrls: ['./ds-phieuthuhoichitiet.component.css']
})
export class DsPhieuthuhoichitietComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSPhieuThuHoi_ChiTiet:any=[];

  ngOnInit(): void {
    this.taiLaiDSPhieuThuHoi_ChiTiet();
  }
  taiLaiDSPhieuThuHoi_ChiTiet(){
    this.service.layDSPhieuThuHoi_ChiTiet().subscribe(data => {
      
      this.DSPhieuThuHoi_ChiTiet = data;
      
    })
  }

}
