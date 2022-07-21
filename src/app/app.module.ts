import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CTChiTietLoaiTSComponent } from './ct-chi-tiet-loai-ts/ct-chi-tiet-loai-ts.component';
import { CTKhoComponent } from './ct-kho/ct-kho.component';
import { CTNhanHieuComponent } from './ct-nhan-hieu/ct-nhan-hieu.component';
import { PQChucNangComponent } from './pq-chuc-nang/pq-chuc-nang.component';
import { PQNhomQuyenComponent } from './pq-nhom-quyen/pq-nhom-quyen.component';
import { PQNhomQuyenCNComponent } from './pq-nhom-quyen-cn/pq-nhom-quyen-cn.component';
import { PQNhomQuyenTKComponent } from './pq-nhom-quyen-tk/pq-nhom-quyen-tk.component';
import { PQTaiKhoanComponent } from './pq-tai-khoan/pq-tai-khoan.component';
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
import { DsTaikhoanComponent } from './pq-tai-khoan/ds-taikhoan/ds-taikhoan.component';
import { ThemSuaTaikhoanComponent } from './pq-tai-khoan/them-sua-taikhoan/them-sua-taikhoan.component';
import { DsLoaiComponent } from './ct-chi-tiet-loai-ts/ds-loai/ds-loai.component';
import { ThemSuaLoaiComponent } from './ct-chi-tiet-loai-ts/them-sua-loai/them-sua-loai.component';
import { DsKhoComponent } from './ct-kho/ds-kho/ds-kho.component';
import { ThemSuaKhoComponent } from './ct-kho/them-sua-kho/them-sua-kho.component';
import { DsNhanhieuComponent } from './ct-nhan-hieu/ds-nhanhieu/ds-nhanhieu.component';
import { ThemSuaNhanhieuComponent } from './ct-nhan-hieu/them-sua-nhanhieu/them-sua-nhanhieu.component';
import { DsChucnangComponent } from './pq-chuc-nang/ds-chucnang/ds-chucnang.component';
import { ThemSuaChucnangComponent } from './pq-chuc-nang/them-sua-chucnang/them-sua-chucnang.component';
import { DsNhomquyenComponent } from './pq-nhom-quyen/ds-nhomquyen/ds-nhomquyen.component';
import { ThemSuaNhomquyenComponent } from './pq-nhom-quyen/them-sua-nhomquyen/them-sua-nhomquyen.component';
import { DsNhomquyencnComponent } from './pq-nhom-quyen-cn/ds-nhomquyencn/ds-nhomquyencn.component';
import { ThemSuaNhomquyencnComponent } from './pq-nhom-quyen-cn/them-sua-nhomquyencn/them-sua-nhomquyencn.component';
import { DsNhomquyentkComponent } from './pq-nhom-quyen-tk/ds-nhomquyentk/ds-nhomquyentk.component';
import { ThemSuaNhomquyentkComponent } from './pq-nhom-quyen-tk/them-sua-nhomquyentk/them-sua-nhomquyentk.component';
import { DsPhieunhapComponent } from './ql-phieu-nhap/ds-phieunhap/ds-phieunhap.component';
import { ThemSuaPhieunhapComponent } from './ql-phieu-nhap/them-sua-phieunhap/them-sua-phieunhap.component';
import { DsPhieuthanhlyComponent } from './ql-phieu-thanh-ly/ds-phieuthanhly/ds-phieuthanhly.component';
import { ThemSuaPhieuthanhlyComponent } from './ql-phieu-thanh-ly/them-sua-phieuthanhly/them-sua-phieuthanhly.component';
import { DsPhieuthanhlychitietComponent } from './ql-phieu-thanh-ly-chi-tiet/ds-phieuthanhlychitiet/ds-phieuthanhlychitiet.component';
import { ThemSuaPhieuthanhlychitietComponent } from './ql-phieu-thanh-ly-chi-tiet/them-sua-phieuthanhlychitiet/them-sua-phieuthanhlychitiet.component';
import { DsPhieuthuhoiComponent } from './ql-phieu-thu-hoi/ds-phieuthuhoi/ds-phieuthuhoi.component';
import { ThemSuaPhieuthuhoiComponent } from './ql-phieu-thu-hoi/them-sua-phieuthuhoi/them-sua-phieuthuhoi.component';
import { DsPhieuthuhoichitietComponent } from './ql-phieu-thu-hoi-chi-tiet/ds-phieuthuhoichitiet/ds-phieuthuhoichitiet.component';
import { ThemSuaPhieuthuhoichitietComponent } from './ql-phieu-thu-hoi-chi-tiet/them-sua-phieuthuhoichitiet/them-sua-phieuthuhoichitiet.component';
import { DsPhieuxuatComponent } from './ql-phieu-xuat/ds-phieuxuat/ds-phieuxuat.component';
import { ThemSuaPhieuxuatComponent } from './ql-phieu-xuat/them-sua-phieuxuat/them-sua-phieuxuat.component';
import { DsPhieuxuatchitietComponent } from './ql-phieu-xuat-chi-tiet/ds-phieuxuatchitiet/ds-phieuxuatchitiet.component';
import { ThemSuaPhieuxuatchitietComponent } from './ql-phieu-xuat-chi-tiet/them-sua-phieuxuatchitiet/them-sua-phieuxuatchitiet.component';
import { DsNhanvienComponent } from './qt-nhan-vien/ds-nhanvien/ds-nhanvien.component';
import { ThemSuaNhanvienComponent } from './qt-nhan-vien/them-sua-nhanvien/them-sua-nhanvien.component';
import { DsPhongbanComponent } from './qt-phong-ban/ds-phongban/ds-phongban.component';
import { ThemSuaPhongbanComponent } from './qt-phong-ban/them-sua-phongban/them-sua-phongban.component';
import { DsTaisanComponent } from './qt-tai-san/ds-taisan/ds-taisan.component';
import { ThemSuaTaisanComponent } from './qt-tai-san/them-sua-taisan/them-sua-taisan.component';
import { PQTaiKhoanDNComponent } from './pq-tai-khoan-dn/pq-tai-khoan-dn.component';
import { SuaPhongBanComponent } from './qt-phong-ban/sua-phong-ban/sua-phong-ban.component';
import { SuaLoaiTsComponent } from './ct-chi-tiet-loai-ts/sua-loai-ts/sua-loai-ts.component';
import { SuaKhoComponent } from './ct-kho/sua-kho/sua-kho.component';
import { SuaNhanHieuComponent } from './ct-nhan-hieu/sua-nhan-hieu/sua-nhan-hieu.component';
import { SuaChucNangComponent } from './pq-chuc-nang/sua-chuc-nang/sua-chuc-nang.component';
import { SuaNhomQuyenComponent } from './pq-nhom-quyen/sua-nhom-quyen/sua-nhom-quyen.component';
import { SuaNhomQuyenCnComponent } from './pq-nhom-quyen-cn/sua-nhom-quyen-cn/sua-nhom-quyen-cn.component';
import { SuaNhomQuyenTkComponent } from './pq-nhom-quyen-tk/sua-nhom-quyen-tk/sua-nhom-quyen-tk.component';
import { SuaTaiKhoanComponent } from './pq-tai-khoan/sua-tai-khoan/sua-tai-khoan.component';
import { SuaPhieuNhapComponent } from './ql-phieu-nhap/sua-phieu-nhap/sua-phieu-nhap.component';
import { SuaPhieuThanhLyComponent } from './ql-phieu-thanh-ly/sua-phieu-thanh-ly/sua-phieu-thanh-ly.component';
import { SuaPhieuThuHoiComponent } from './ql-phieu-thu-hoi/sua-phieu-thu-hoi/sua-phieu-thu-hoi.component';
import { SuaPhieuXuatComponent } from './ql-phieu-xuat/sua-phieu-xuat/sua-phieu-xuat.component';
import { SuaNhanVienComponent } from './qt-nhan-vien/sua-nhan-vien/sua-nhan-vien.component';
import { SuaTaiSanComponent } from './qt-tai-san/sua-tai-san/sua-tai-san.component';

// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CTChiTietLoaiTSComponent,
    CTKhoComponent,
    CTNhanHieuComponent,
    PQChucNangComponent,
    PQNhomQuyenComponent,
    PQNhomQuyenCNComponent,
    PQNhomQuyenTKComponent,
    PQTaiKhoanComponent,
    QLPhieuNhapComponent,
    QLPhieuThanhLyComponent,
    QLPhieuThanhLyChiTietComponent,
    QLPhieuThuHoiComponent,
    QLPhieuThuHoiChiTietComponent,
    QLPhieuXuatComponent,
    QLPhieuXuatChiTietComponent,
    QTNhanVienComponent,
    QTPhongBanComponent,
    QTTaiSanComponent,
    DsTaikhoanComponent,
    ThemSuaTaikhoanComponent,
    DsLoaiComponent,
    ThemSuaLoaiComponent,
    DsKhoComponent,
    ThemSuaKhoComponent,
    DsNhanhieuComponent,
    ThemSuaNhanhieuComponent,
    DsChucnangComponent,
    ThemSuaChucnangComponent,
    DsNhomquyenComponent,
    ThemSuaNhomquyenComponent,
    DsNhomquyencnComponent,
    ThemSuaNhomquyencnComponent,
    DsNhomquyentkComponent,
    ThemSuaNhomquyentkComponent,
    DsPhieunhapComponent,
    ThemSuaPhieunhapComponent,
    DsPhieuthanhlyComponent,
    ThemSuaPhieuthanhlyComponent,
    DsPhieuthanhlychitietComponent,
    ThemSuaPhieuthanhlychitietComponent,
    DsPhieuthuhoiComponent,
    ThemSuaPhieuthuhoiComponent,
    DsPhieuthuhoichitietComponent,
    ThemSuaPhieuthuhoichitietComponent,
    DsPhieuxuatComponent,
    ThemSuaPhieuxuatComponent,
    DsPhieuxuatchitietComponent,
    ThemSuaPhieuxuatchitietComponent,
    DsNhanvienComponent,
    ThemSuaNhanvienComponent,
    DsPhongbanComponent,
    ThemSuaPhongbanComponent,
    DsTaisanComponent,
    ThemSuaTaisanComponent,
    PQTaiKhoanDNComponent,
    SuaPhongBanComponent,
    SuaLoaiTsComponent,
    SuaKhoComponent,
    SuaNhanHieuComponent,
    SuaChucNangComponent,
    SuaNhomQuyenComponent,
    SuaNhomQuyenCnComponent,
    SuaNhomQuyenTkComponent,
    SuaTaiKhoanComponent,
    SuaPhieuNhapComponent,
    SuaPhieuThanhLyComponent,
    SuaPhieuThuHoiComponent,
    SuaPhieuXuatComponent,
    SuaNhanVienComponent,
    SuaTaiSanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
