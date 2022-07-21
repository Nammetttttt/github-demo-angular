import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuXuatChiTietComponent } from './ql-phieu-xuat-chi-tiet.component';

describe('QLPhieuXuatChiTietComponent', () => {
  let component: QLPhieuXuatChiTietComponent;
  let fixture: ComponentFixture<QLPhieuXuatChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuXuatChiTietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuXuatChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
