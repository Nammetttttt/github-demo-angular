import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaNhomquyentkComponent } from './them-sua-nhomquyentk.component';

describe('ThemSuaNhomquyentkComponent', () => {
  let component: ThemSuaNhomquyentkComponent;
  let fixture: ComponentFixture<ThemSuaNhomquyentkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaNhomquyentkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaNhomquyentkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
