import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieuthuhoichitietComponent } from './them-sua-phieuthuhoichitiet.component';

describe('ThemSuaPhieuthuhoichitietComponent', () => {
  let component: ThemSuaPhieuthuhoichitietComponent;
  let fixture: ComponentFixture<ThemSuaPhieuthuhoichitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieuthuhoichitietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieuthuhoichitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
