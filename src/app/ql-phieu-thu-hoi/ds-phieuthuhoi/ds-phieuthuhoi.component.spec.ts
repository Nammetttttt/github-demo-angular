import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieuthuhoiComponent } from './ds-phieuthuhoi.component';

describe('DsPhieuthuhoiComponent', () => {
  let component: DsPhieuthuhoiComponent;
  let fixture: ComponentFixture<DsPhieuthuhoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieuthuhoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieuthuhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
