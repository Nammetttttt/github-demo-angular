import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieuthuhoiComponent } from './them-sua-phieuthuhoi.component';

describe('ThemSuaPhieuthuhoiComponent', () => {
  let component: ThemSuaPhieuthuhoiComponent;
  let fixture: ComponentFixture<ThemSuaPhieuthuhoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieuthuhoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieuthuhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
