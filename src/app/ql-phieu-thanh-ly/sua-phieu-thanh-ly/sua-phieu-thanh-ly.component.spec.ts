import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPhieuThanhLyComponent } from './sua-phieu-thanh-ly.component';

describe('SuaPhieuThanhLyComponent', () => {
  let component: SuaPhieuThanhLyComponent;
  let fixture: ComponentFixture<SuaPhieuThanhLyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaPhieuThanhLyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaPhieuThanhLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
