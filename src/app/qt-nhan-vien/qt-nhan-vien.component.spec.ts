import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTNhanVienComponent } from './qt-nhan-vien.component';

describe('QTNhanVienComponent', () => {
  let component: QTNhanVienComponent;
  let fixture: ComponentFixture<QTNhanVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QTNhanVienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QTNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
