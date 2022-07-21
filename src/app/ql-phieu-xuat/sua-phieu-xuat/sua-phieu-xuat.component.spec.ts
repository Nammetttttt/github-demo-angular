import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPhieuXuatComponent } from './sua-phieu-xuat.component';

describe('SuaPhieuXuatComponent', () => {
  let component: SuaPhieuXuatComponent;
  let fixture: ComponentFixture<SuaPhieuXuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaPhieuXuatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaPhieuXuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
