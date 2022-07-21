import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ds-nhomquyen',
  templateUrl: './ds-nhomquyen.component.html',
  styleUrls: ['./ds-nhomquyen.component.css']
})
export class DsNhomquyenComponent implements OnInit {

  constructor(private service:SharedService) {}
  DSChucNang:any=[];
   DSNhomQuyen:any=[];
   nhomquyen:any;
   tennhomquyen:any;
   chucnang:any;
   suanhomquyen:boolean=false;
  ngOnInit(): void {
    this.taiLaiDSNhomQuyen();
    this.taiLaiDSChucNang();
  }
  taiLaiDSNhomQuyen(){
    this.service.layDSNhomQuyen().subscribe(data => {
      
      this.DSNhomQuyen = data;
      
    })
  }
  taiLaiDSChucNang(){
    this.service.layDSChucNang().subscribe(data => {
      
      this.DSChucNang = data;
      
    })
  }
  chitietNhomquyen(nHomquyen:any){
    this.nhomquyen=nHomquyen;
    this.suanhomquyen=true;
  }
  chitietNhomquyen1(nHomquyen:any){
    this.nhomquyen=nHomquyen;
  }
  dong(){
    this.suanhomquyen=false;
  }
  xoaNhomquyen(nHomquyen:any){
    if(confirm("Bạn có chắc muốn xóa")){
      this.service.XoaNhomQuyen(nHomquyen.id_NQ).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      alert("Xóa thành công");
      location.reload();
    }
    
  }
  themNhomquyencn(nHomquyen:any){
      var val={
        ten:this.tennhomquyen,
        moTa:this.chucnang
      }
      this.service.ThemNhomQuyen_CN(val).subscribe(
        data=>{
          alert(data.toString());
        }
      );
      
      location.reload();
    
    
  }
}
