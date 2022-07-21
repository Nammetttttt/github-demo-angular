import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaNhanvienComponent } from './them-sua-nhanvien.component';

describe('ThemSuaNhanvienComponent', () => {
  let component: ThemSuaNhanvienComponent;
  let fixture: ComponentFixture<ThemSuaNhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaNhanvienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
