import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTaikhoanComponent } from './ds-taikhoan.component';

describe('DsTaikhoanComponent', () => {
  let component: DsTaikhoanComponent;
  let fixture: ComponentFixture<DsTaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsTaikhoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsTaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
