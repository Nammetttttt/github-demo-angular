import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-nhomquyencn',
  templateUrl: './ds-nhomquyencn.component.html',
  styleUrls: ['./ds-nhomquyencn.component.css']
})
export class DsNhomquyencnComponent implements OnInit {

  constructor(private service:SharedService) {}
  @Input() nhomquyen:any;
  DSNhomQuyen_CN:any=[];
  id_NQ:any;
  ngOnInit(): void {
    this.taiLaiDSNhomQuyen_CN();
    
    this.id_NQ = this.nhomquyen.id_NQ;
    
  }
  taiLaiDSNhomQuyen_CN(){
    this.service.layDSNhomQuyen_CN().subscribe(data => {
      
      this.DSNhomQuyen_CN = data;
    })
  }
  xoaNhomquyencn(nHomquyen_cn:any){
    // if(confirm(this.id_NQ)){}
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaNhomQuyen_CN(nHomquyen_cn.id).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      location.reload();
    };
    
  }
}
