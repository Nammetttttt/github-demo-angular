import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNhomQuyenCnComponent } from './sua-nhom-quyen-cn.component';

describe('SuaNhomQuyenCnComponent', () => {
  let component: SuaNhomQuyenCnComponent;
  let fixture: ComponentFixture<SuaNhomQuyenCnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaNhomQuyenCnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaNhomQuyenCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
