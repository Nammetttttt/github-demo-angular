import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNhomQuyenTkComponent } from './sua-nhom-quyen-tk.component';

describe('SuaNhomQuyenTkComponent', () => {
  let component: SuaNhomQuyenTkComponent;
  let fixture: ComponentFixture<SuaNhomQuyenTkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaNhomQuyenTkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaNhomQuyenTkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
