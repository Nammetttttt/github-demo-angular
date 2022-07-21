import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaNhanhieuComponent } from './them-sua-nhanhieu.component';

describe('ThemSuaNhanhieuComponent', () => {
  let component: ThemSuaNhanhieuComponent;
  let fixture: ComponentFixture<ThemSuaNhanhieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaNhanhieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaNhanhieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
