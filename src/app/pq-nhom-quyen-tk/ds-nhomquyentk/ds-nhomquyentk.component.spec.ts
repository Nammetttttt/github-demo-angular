import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhomquyentkComponent } from './ds-nhomquyentk.component';

describe('DsNhomquyentkComponent', () => {
  let component: DsNhomquyentkComponent;
  let fixture: ComponentFixture<DsNhomquyentkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNhomquyentkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsNhomquyentkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
