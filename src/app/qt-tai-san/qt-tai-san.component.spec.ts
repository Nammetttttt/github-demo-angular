import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTTaiSanComponent } from './qt-tai-san.component';

describe('QTTaiSanComponent', () => {
  let component: QTTaiSanComponent;
  let fixture: ComponentFixture<QTTaiSanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QTTaiSanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QTTaiSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
