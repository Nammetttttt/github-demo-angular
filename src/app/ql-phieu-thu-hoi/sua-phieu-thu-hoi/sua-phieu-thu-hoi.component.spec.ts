import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPhieuThuHoiComponent } from './sua-phieu-thu-hoi.component';

describe('SuaPhieuThuHoiComponent', () => {
  let component: SuaPhieuThuHoiComponent;
  let fixture: ComponentFixture<SuaPhieuThuHoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaPhieuThuHoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaPhieuThuHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
