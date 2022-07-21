import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsChucnangComponent } from './ds-chucnang.component';

describe('DsChucnangComponent', () => {
  let component: DsChucnangComponent;
  let fixture: ComponentFixture<DsChucnangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsChucnangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsChucnangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
