import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-phieuthanhlychitiet',
  templateUrl: './ds-phieuthanhlychitiet.component.html',
  styleUrls: ['./ds-phieuthanhlychitiet.component.css']
})
export class DsPhieuthanhlychitietComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSPhieuThanhLy_ChiTiet:any=[];

  ngOnInit(): void {
    this.taiLaiDSPhieuThanhLy_ChiTiet();
  }
  taiLaiDSPhieuThanhLy_ChiTiet(){
    this.service.layDSPhieuThanhLy_ChiTiet().subscribe(data => {
      
      this.DSPhieuThanhLy_ChiTiet = data;
      
    })
  }

}
