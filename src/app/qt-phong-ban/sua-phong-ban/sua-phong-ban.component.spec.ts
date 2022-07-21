import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPhongBanComponent } from './sua-phong-ban.component';

describe('SuaPhongBanComponent', () => {
  let component: SuaPhongBanComponent;
  let fixture: ComponentFixture<SuaPhongBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaPhongBanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaPhongBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
