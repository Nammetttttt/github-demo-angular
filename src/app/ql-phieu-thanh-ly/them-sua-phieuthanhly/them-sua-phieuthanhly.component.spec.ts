import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieuthanhlyComponent } from './them-sua-phieuthanhly.component';

describe('ThemSuaPhieuthanhlyComponent', () => {
  let component: ThemSuaPhieuthanhlyComponent;
  let fixture: ComponentFixture<ThemSuaPhieuthanhlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieuthanhlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieuthanhlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
