import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaLoaiComponent } from './them-sua-loai.component';

describe('ThemSuaLoaiComponent', () => {
  let component: ThemSuaLoaiComponent;
  let fixture: ComponentFixture<ThemSuaLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaLoaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
