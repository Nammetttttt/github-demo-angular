import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaTaisanComponent } from './them-sua-taisan.component';

describe('ThemSuaTaisanComponent', () => {
  let component: ThemSuaTaisanComponent;
  let fixture: ComponentFixture<ThemSuaTaisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSuaTaisanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemSuaTaisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
