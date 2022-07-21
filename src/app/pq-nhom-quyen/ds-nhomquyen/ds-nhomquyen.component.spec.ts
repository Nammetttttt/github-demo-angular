import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhomquyenComponent } from './ds-nhomquyen.component';

describe('DsNhomquyenComponent', () => {
  let component: DsNhomquyenComponent;
  let fixture: ComponentFixture<DsNhomquyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNhomquyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsNhomquyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
