import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhanhieuComponent } from './ds-nhanhieu.component';

describe('DsNhanhieuComponent', () => {
  let component: DsNhanhieuComponent;
  let fixture: ComponentFixture<DsNhanhieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNhanhieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsNhanhieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
