import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl= "https://localhost:7103/api";
  readonly PhotoUrl= "https://localhost:7103/Photos";

  constructor(private http:HttpClient) { }

  layDSNguoiDung(val:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+'/PQ_TaiKhoan_DN',val);
  }
  
  layDSTaiKhoan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PQ_TaiKhoan');
  }
  ThemTaiKhoan(val:any){
    return this.http.post(this.APIUrl+'/PQ_TaiKhoan', val);
  }
  SuaTaiKhoan(val:any){
    return this.http.put<any>(this.APIUrl+'/PQ_TaiKhoan', val);
  }
  XoaTaiKhoan(val:any){
    return this.http.delete(this.APIUrl+'/PQ_TaiKhoan/?maTK='+val);
  }
  layDSLoaiTS():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/CT_ChiTietLoaiTS');
  }
  ThemLoaiTS(val:any){
    return this.http.post(this.APIUrl+'/CT_ChiTietLoaiTS', val);
  }
  SuaLoaiTS(val:any){
    return this.http.put<any>(this.APIUrl+'/CT_ChiTietLoaiTS',val);
  }
  XoaLoaiTS(val:any){
    return this.http.delete(this.APIUrl+'/CT_ChiTietLoaiTS?Id_Loai='+val);
  }
  layDSKho():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/CT_Kho');
  }
  ThemKho(val:any){
    return this.http.post(this.APIUrl+'/CT_Kho', val);
  }
  SuaKho(val:any){
    return this.http.put<any>(this.APIUrl+'/CT_Kho',val);
  }
  XoaKho(val:any){
    return this.http.delete(this.APIUrl+'/CT_Kho?Id_Kho='+val);
  }
  layDSNhanHieu():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/CT_NhanHieu');
  }
  ThemNhanHieu(val:any){
    return this.http.post(this.APIUrl+'/CT_NhanHieu', val);
  }
  SuaNhanHieu(val:any){
    return this.http.put<any>(this.APIUrl+'/CT_NhanHieu',val);
  }
  XoaNhanHieu(val:any){
    return this.http.delete(this.APIUrl+'/CT_NhanHieu?Id_NH='+val);
  }
  layDSChucNang():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PQ_ChucNang');
  }
  ThemChucNang(val:any){
    return this.http.post(this.APIUrl+'/PQ_ChucNang', val);
  }
  SuaChucNang(val:any){
    return this.http.put<any>(this.APIUrl+'/PQ_ChucNang',val);
  }
  XoaChucNang(val:any){
    return this.http.delete(this.APIUrl+'/PQ_ChucNang?Id_CN='+val);
  }
  layDSNhomQuyen():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PQ_NhomQuyen');
  }
  ThemNhomQuyen(val:any){
    return this.http.post(this.APIUrl+'/PQ_NhomQuyen', val);
  }
  SuaNhomQuyen(val:any){
    return this.http.put<any>(this.APIUrl+'/PQ_NhomQuyen',val);
  }
  XoaNhomQuyen(val:any){
    return this.http.delete(this.APIUrl+'/PQ_NhomQuyen?Id_NQ='+val);
  }
  layDSNhomQuyen_CN():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PQ_NhomQuyen_CN');
  }
  ThemNhomQuyen_CN(val:any){
    return this.http.post(this.APIUrl+'/PQ_NhomQuyen_CN', val);
  }
  SuaNhomQuyen_CN(val:any){
    return this.http.put<any>(this.APIUrl+'/PQ_NhomQuyen_CN',val);
  }
  XoaNhomQuyen_CN(val:any){
    return this.http.delete(this.APIUrl+'/PQ_NhomQuyen_CN?ID='+val);
  }
  layDSNhomQuyen_TK():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PQ_NhomQuyen_TK');
  }
  ThemNhomQuyen_TK(val:any){
    return this.http.post(this.APIUrl+'/PQ_NhomQuyen_TK', val);
  }
  SuaNhomQuyen_TK(val:any){
    return this.http.put<any>(this.APIUrl+'/PQ_NhomQuyen_TK',val);
  }
  XoaNhomQuyen_TK(val:any){
    return this.http.delete(this.APIUrl+'/PQ_NhomQuyen_TK?ID='+val);
  }
  layDSPhieuNhap():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuNhap');
  }
  ThemPhieuNhap(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuNhap', val);
  }
  SuaPhieuNhap(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuNhap',val);
  }
  XoaPhieuNhap(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuNhap?Id_PN='+val);
  }
  layDSPhieuThanhLy():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuThanhLy');
  }
  ThemPhieuThanhLy(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuThanhLy', val);
  }
  SuaPhieuThanhLy(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuThanhLy',val);
  }
  XoaPhieuThanhLy(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuThanhLy?Id_PTL='+val);
  }
  layDSPhieuThanhLy_ChiTiet():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuThanhLy_ChiTiet');
  }
  ThemPhieuThanhLy_ChiTiet(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuThanhLy_ChiTiet', val);
  }
  SuaPhieuThanhLy_ChiTiet(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuThanhLy_ChiTiet',val);
  }
  XoaPhieuThanhLy_ChiTiet(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuThanhLy_ChiTiet?Id_PTL='+val);
  }
  layDSPhieuThuHoi():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuThuHoi');
  }
  ThemPhieuThuHoi(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuThuHoi', val);
  }
  SuaPhieuThuHoi(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuThuHoi',val);
  }
  XoaPhieuThuHoi(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuThuHoi?Id_PTH='+val);
  }
  layDSPhieuThuHoi_ChiTiet():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuThuHoi_ChiTiet');
  }
  ThemPhieuThuHoi_ChiTiet(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuThuHoi_ChiTiet', val);
  }
  SuaPhieuThuHoi_ChiTiet(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuThuHoi_ChiTiet',val);
  }
  XoaPhieuThuHoi_ChiTiet(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuThuHoi_ChiTiet?Id_PTH='+val);
  }
  layDSPhieuXuat():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuXuat');
  }
  ThemPhieuXuat(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuXuat', val);
  }
  SuaPhieuXuat(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuXuat',val);
  }
  XoaPhieuXuat(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuXuat?Id_PX='+val);
  }
  layDSPhieuXuat_ChiTiet():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QL_PhieuXuat_ChiTiet');
  }
  ThemPhieuXuat_ChiTiet(val:any){
    return this.http.post(this.APIUrl+'/QL_PhieuXuat_ChiTiet', val);
  }
  SuaPhieuXuat_ChiTiet(val:any){
    return this.http.put<any>(this.APIUrl+'/QL_PhieuXuat_ChiTiet',val);
  }
  XoaPhieuXuat_ChiTiet(val:any){
    return this.http.delete(this.APIUrl+'/QL_PhieuXuat_ChiTiet?Id_PX='+val);
  }
  layDSNhanVien():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QT_NhanVien');
  }
  ThemNhanVien(val:any){
    return this.http.post(this.APIUrl+'/QT_NhanVien', val);
  }
  SuaNhanVien(val:any){
    return this.http.put<any>(this.APIUrl+'/QT_NhanVien',val);
  }
  XoaNhanVien(val:any){
    return this.http.delete(this.APIUrl+'/QT_NhanVien?Id_NV='+val);
  }
  layDSPhongBan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QT_PhongBan');
  }
  ThemPhongBan(val:any){
    return this.http.post<any>(this.APIUrl+'/QT_PhongBan', val);
  }
  SuaPhongBan(val:any){
    return this.http.put<any>(this.APIUrl+'/QT_PhongBan', val);
  }
  XoaPhongBan(val:any){
    return this.http.delete(this.APIUrl+'/QT_PhongBan?Id_PB='+val);
  }
  layDSTaiSan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QT_TaiSan');
  }
  ThemTaiSan(val:any){
    return this.http.post(this.APIUrl+'/QT_TaiSan', val);
  }
  SuaTaiSan(val:any){
    return this.http.put<any>(this.APIUrl+'/QT_TaiSan',val);
  }
  XoaTaiSan(val:any){
    return this.http.delete(this.APIUrl+'/QT_TaiSan?Id_TS='+val);
  }
}
