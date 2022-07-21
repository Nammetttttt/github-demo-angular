import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTPhongBanComponent } from './qt-phong-ban.component';

describe('QTPhongBanComponent', () => {
  let component: QTPhongBanComponent;
  let fixture: ComponentFixture<QTPhongBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QTPhongBanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QTPhongBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
