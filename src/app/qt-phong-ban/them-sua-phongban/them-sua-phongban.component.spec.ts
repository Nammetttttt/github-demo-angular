import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhongbanComponent } from './them-sua-phongban.component';

describe('ThemSuaPhongbanComponent', () => {
  let component: ThemSuaPhongbanComponent;
  let fixture: ComponentFixture<ThemSuaPhongbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhongbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
