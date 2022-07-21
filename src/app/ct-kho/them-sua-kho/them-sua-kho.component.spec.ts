import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaKhoComponent } from './them-sua-kho.component';

describe('ThemSuaKhoComponent', () => {
  let component: ThemSuaKhoComponent;
  let fixture: ComponentFixture<ThemSuaKhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaKhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
