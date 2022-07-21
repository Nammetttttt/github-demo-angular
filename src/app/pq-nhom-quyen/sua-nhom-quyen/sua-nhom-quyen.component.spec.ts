import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNhomQuyenComponent } from './sua-nhom-quyen.component';

describe('SuaNhomQuyenComponent', () => {
  let component: SuaNhomQuyenComponent;
  let fixture: ComponentFixture<SuaNhomQuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaNhomQuyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaNhomQuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
