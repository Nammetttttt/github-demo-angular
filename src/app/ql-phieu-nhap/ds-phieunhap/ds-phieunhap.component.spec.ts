import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieunhapComponent } from './ds-phieunhap.component';

describe('DsPhieunhapComponent', () => {
  let component: DsPhieunhapComponent;
  let fixture: ComponentFixture<DsPhieunhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieunhapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieunhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
