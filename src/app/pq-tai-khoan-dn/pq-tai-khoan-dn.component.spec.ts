import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQTaiKhoanDNComponent } from './pq-tai-khoan-dn.component';

describe('PQTaiKhoanDNComponent', () => {
  let component: PQTaiKhoanDNComponent;
  let fixture: ComponentFixture<PQTaiKhoanDNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQTaiKhoanDNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQTaiKhoanDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
