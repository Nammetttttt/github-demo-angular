import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuThuHoiComponent } from './ql-phieu-thu-hoi.component';

describe('QLPhieuThuHoiComponent', () => {
  let component: QLPhieuThuHoiComponent;
  let fixture: ComponentFixture<QLPhieuThuHoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuThuHoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuThuHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
