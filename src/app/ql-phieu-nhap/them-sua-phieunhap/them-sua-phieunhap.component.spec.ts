import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieunhapComponent } from './them-sua-phieunhap.component';

describe('ThemSuaPhieunhapComponent', () => {
  let component: ThemSuaPhieunhapComponent;
  let fixture: ComponentFixture<ThemSuaPhieunhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieunhapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieunhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
