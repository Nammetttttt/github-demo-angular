import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsKhoComponent } from './ds-kho.component';

describe('DsKhoComponent', () => {
  let component: DsKhoComponent;
  let fixture: ComponentFixture<DsKhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsKhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
