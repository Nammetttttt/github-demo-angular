import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhanvienComponent } from './ds-nhanvien.component';

describe('DsNhanvienComponent', () => {
  let component: DsNhanvienComponent;
  let fixture: ComponentFixture<DsNhanvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsNhanvienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
