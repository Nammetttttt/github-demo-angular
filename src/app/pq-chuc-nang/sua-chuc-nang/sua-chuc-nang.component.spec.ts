import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaChucNangComponent } from './sua-chuc-nang.component';

describe('SuaChucNangComponent', () => {
  let component: SuaChucNangComponent;
  let fixture: ComponentFixture<SuaChucNangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaChucNangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
