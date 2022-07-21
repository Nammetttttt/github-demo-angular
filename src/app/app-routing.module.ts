import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PQTaiKhoanDNComponent } from './pq-tai-khoan-dn/pq-tai-khoan-dn.component';
import { PQTaiKhoanComponent } from './pq-tai-khoan/pq-tai-khoan.component';
import { CTChiTietLoaiTSComponent } from './ct-chi-tiet-loai-ts/ct-chi-tiet-loai-ts.component';
import { CTKhoComponent } from './ct-kho/ct-kho.component';
import { CTNhanHieuComponent } from './ct-nhan-hieu/ct-nhan-hieu.component';
import { PQChucNangComponent } from './pq-chuc-nang/pq-chuc-nang.component';
import { PQNhomQuyenComponent } from './pq-nhom-quyen/pq-nhom-quyen.component';
import { PQNhomQuyenCNComponent } from './pq-nhom-quyen-cn/pq-nhom-quyen-cn.component';
import { PQNhomQuyenTKComponent } from './pq-nhom-quyen-tk/pq-nhom-quyen-tk.component';
import { QLPhieuNhapComponent } from './ql-phieu-nhap/ql-phieu-nhap.component';

import { QLPhieuThanhLyComponent } from './ql-phieu-thanh-ly/ql-phieu-thanh-ly.component';
import { QLPhieuThanhLyChiTietComponent } from './ql-phieu-thanh-ly-chi-tiet/ql-phieu-thanh-ly-chi-tiet.component';
import { QLPhieuThuHoiComponent } from './ql-phieu-thu-hoi/ql-phieu-thu-hoi.component';
import { QLPhieuThuHoiChiTietComponent } from './ql-phieu-thu-hoi-chi-tiet/ql-phieu-thu-hoi-chi-tiet.component';
import { QLPhieuXuatComponent } from './ql-phieu-xuat/ql-phieu-xuat.component';
import { QLPhieuXuatChiTietComponent } from './ql-phieu-xuat-chi-tiet/ql-phieu-xuat-chi-tiet.component';
import { QTNhanVienComponent } from './qt-nhan-vien/qt-nhan-vien.component';
import { QTPhongBanComponent } from './qt-phong-ban/qt-phong-ban.component';
import { QTTaiSanComponent } from './qt-tai-san/qt-tai-san.component';
import { AppModule } from './app.module';


const routes: Routes = [
  {path: 'DangNhap', component:PQTaiKhoanDNComponent},
  {path: 'taikhoan', component:PQTaiKhoanComponent},
  {path: 'Loai', component:CTChiTietLoaiTSComponent},
  {path: 'Kho', component:CTKhoComponent},
  {path: 'NhanHieu', component:CTNhanHieuComponent},
  {path: 'ChucNang', component:PQChucNangComponent},
  {path: 'NhomQuyen', component:PQNhomQuyenComponent},
  {path: 'NhomQuyen_CN', component:PQNhomQuyenCNComponent},
  {path: 'NhomQuyen_TK', component:PQNhomQuyenTKComponent},
  {path: 'PhieuNhap', component:QLPhieuNhapComponent},
  
  {path: 'PhieuThanhLy', component:QLPhieuThanhLyComponent},
  {path: 'PhieuThanhLy_CT', component:QLPhieuThanhLyChiTietComponent},
  {path: 'PhieuThuHoi', component:QLPhieuThuHoiComponent},
  {path: 'PhieuThuHoi_CT', component:QLPhieuThuHoiChiTietComponent},
  {path: 'PhieuXuat', component:QLPhieuXuatComponent},
  {path: 'PhieuXuat_CT', component:QLPhieuXuatChiTietComponent},
  {path: 'NhanVien', component:QTNhanVienComponent},
  {path: 'PhongBan', component:QTPhongBanComponent},
  {path: 'TaiSan', component:QTTaiSanComponent}
  // { path: 'AppComponent', component:Component }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }

