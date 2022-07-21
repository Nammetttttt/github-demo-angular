import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieuthanhlychitietComponent } from './them-sua-phieuthanhlychitiet.component';

describe('ThemSuaPhieuthanhlychitietComponent', () => {
  let component: ThemSuaPhieuthanhlychitietComponent;
  let fixture: ComponentFixture<ThemSuaPhieuthanhlychitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieuthanhlychitietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieuthanhlychitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
