import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieuthuhoichitietComponent } from './ds-phieuthuhoichitiet.component';

describe('DsPhieuthuhoichitietComponent', () => {
  let component: DsPhieuthuhoichitietComponent;
  let fixture: ComponentFixture<DsPhieuthuhoichitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieuthuhoichitietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieuthuhoichitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
