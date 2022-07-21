import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieuthanhlychitietComponent } from './ds-phieuthanhlychitiet.component';

describe('DsPhieuthanhlychitietComponent', () => {
  let component: DsPhieuthanhlychitietComponent;
  let fixture: ComponentFixture<DsPhieuthanhlychitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieuthanhlychitietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieuthanhlychitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
