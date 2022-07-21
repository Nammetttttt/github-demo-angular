import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaKhoComponent } from './sua-kho.component';

describe('SuaKhoComponent', () => {
  let component: SuaKhoComponent;
  let fixture: ComponentFixture<SuaKhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaKhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
