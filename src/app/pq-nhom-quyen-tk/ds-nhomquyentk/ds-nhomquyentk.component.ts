import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-nhomquyentk',
  templateUrl: './ds-nhomquyentk.component.html',
  styleUrls: ['./ds-nhomquyentk.component.css']
})
export class DsNhomquyentkComponent implements OnInit {

  constructor(private service:SharedService) {}
   
   DSNhomQuyen_TK:any=[];

  ngOnInit(): void {
    this.taiLaiDSNhomQuyen_TK();
  }
  taiLaiDSNhomQuyen_TK(){
    this.service.layDSNhomQuyen_TK().subscribe(data => {
      
      this.DSNhomQuyen_TK = data;
      
    })
  }

}
