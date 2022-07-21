import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTaisanComponent } from './ds-taisan.component';

describe('DsTaisanComponent', () => {
  let component: DsTaisanComponent;
  let fixture: ComponentFixture<DsTaisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsTaisanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsTaisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
