import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaTaiKhoanComponent } from './sua-tai-khoan.component';

describe('SuaTaiKhoanComponent', () => {
  let component: SuaTaiKhoanComponent;
  let fixture: ComponentFixture<SuaTaiKhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaTaiKhoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaTaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
