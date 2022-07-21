import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaNhomquyenComponent } from './them-sua-nhomquyen.component';

describe('ThemSuaNhomquyenComponent', () => {
  let component: ThemSuaNhomquyenComponent;
  let fixture: ComponentFixture<ThemSuaNhomquyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaNhomquyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaNhomquyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
