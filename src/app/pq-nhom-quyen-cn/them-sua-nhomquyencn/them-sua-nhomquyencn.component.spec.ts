import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaNhomquyencnComponent } from './them-sua-nhomquyencn.component';

describe('ThemSuaNhomquyencnComponent', () => {
  let component: ThemSuaNhomquyencnComponent;
  let fixture: ComponentFixture<ThemSuaNhomquyencnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaNhomquyencnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaNhomquyencnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
