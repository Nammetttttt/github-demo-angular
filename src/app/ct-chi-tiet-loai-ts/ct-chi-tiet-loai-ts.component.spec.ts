import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTChiTietLoaiTSComponent } from './ct-chi-tiet-loai-ts.component';

describe('CTChiTietLoaiTSComponent', () => {
  let component: CTChiTietLoaiTSComponent;
  let fixture: ComponentFixture<CTChiTietLoaiTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTChiTietLoaiTSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTChiTietLoaiTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
