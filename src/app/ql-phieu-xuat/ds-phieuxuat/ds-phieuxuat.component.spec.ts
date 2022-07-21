import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieuxuatComponent } from './ds-phieuxuat.component';

describe('DsPhieuxuatComponent', () => {
  let component: DsPhieuxuatComponent;
  let fixture: ComponentFixture<DsPhieuxuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieuxuatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieuxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
