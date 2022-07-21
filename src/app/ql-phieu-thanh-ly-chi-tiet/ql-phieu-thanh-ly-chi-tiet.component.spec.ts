import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuThanhLyChiTietComponent } from './ql-phieu-thanh-ly-chi-tiet.component';

describe('QLPhieuThanhLyChiTietComponent', () => {
  let component: QLPhieuThanhLyChiTietComponent;
  let fixture: ComponentFixture<QLPhieuThanhLyChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuThanhLyChiTietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuThanhLyChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
