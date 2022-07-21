import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieuxuatComponent } from './them-sua-phieuxuat.component';

describe('ThemSuaPhieuxuatComponent', () => {
  let component: ThemSuaPhieuxuatComponent;
  let fixture: ComponentFixture<ThemSuaPhieuxuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaPhieuxuatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaPhieuxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
