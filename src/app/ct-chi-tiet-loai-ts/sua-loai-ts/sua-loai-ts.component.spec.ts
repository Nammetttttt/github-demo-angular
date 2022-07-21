import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaLoaiTsComponent } from './sua-loai-ts.component';

describe('SuaLoaiTsComponent', () => {
  let component: SuaLoaiTsComponent;
  let fixture: ComponentFixture<SuaLoaiTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaLoaiTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaLoaiTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
