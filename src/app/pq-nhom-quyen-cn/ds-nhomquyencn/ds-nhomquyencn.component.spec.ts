import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhomquyencnComponent } from './ds-nhomquyencn.component';

describe('DsNhomquyencnComponent', () => {
  let component: DsNhomquyencnComponent;
  let fixture: ComponentFixture<DsNhomquyencnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNhomquyencnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsNhomquyencnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
