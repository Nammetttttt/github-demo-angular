import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaChucnangComponent } from './them-sua-chucnang.component';

describe('ThemSuaChucnangComponent', () => {
  let component: ThemSuaChucnangComponent;
  let fixture: ComponentFixture<ThemSuaChucnangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaChucnangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaChucnangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
