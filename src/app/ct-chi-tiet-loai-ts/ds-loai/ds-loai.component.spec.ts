import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLoaiComponent } from './ds-loai.component';

describe('DsLoaiComponent', () => {
  let component: DsLoaiComponent;
  let fixture: ComponentFixture<DsLoaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsLoaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
