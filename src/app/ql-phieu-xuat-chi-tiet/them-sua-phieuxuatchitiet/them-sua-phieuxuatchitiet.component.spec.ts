import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieuxuatchitietComponent } from './them-sua-phieuxuatchitiet.component';

describe('ThemSuaPhieuxuatchitietComponent', () => {
  let component: ThemSuaPhieuxuatchitietComponent;
  let fixture: ComponentFixture<ThemSuaPhieuxuatchitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieuxuatchitietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieuxuatchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
