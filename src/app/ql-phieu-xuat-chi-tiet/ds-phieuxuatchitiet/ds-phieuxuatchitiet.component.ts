import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieuxuatchitiet',
  templateUrl: './ds-phieuxuatchitiet.component.html',
  styleUrls: ['./ds-phieuxuatchitiet.component.css']
})
export class DsPhieuxuatchitietComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSPhieuXuat_ChiTiet:any=[];

  ngOnInit(): void {
    this.taiLaiDSPhieuXuat_ChiTiet();
  }
  taiLaiDSPhieuXuat_ChiTiet(){
    this.service.layDSPhieuXuat_ChiTiet().subscribe(data => {
      
      this.DSPhieuXuat_ChiTiet = data;
      
    })
  }

}
