import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuThuHoiChiTietComponent } from './ql-phieu-thu-hoi-chi-tiet.component';

describe('QLPhieuThuHoiChiTietComponent', () => {
  let component: QLPhieuThuHoiChiTietComponent;
  let fixture: ComponentFixture<QLPhieuThuHoiChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuThuHoiChiTietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuThuHoiChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
