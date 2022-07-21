import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQTaiKhoanComponent } from './pq-tai-khoan.component';

describe('PQTaiKhoanComponent', () => {
  let component: PQTaiKhoanComponent;
  let fixture: ComponentFixture<PQTaiKhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQTaiKhoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQTaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
