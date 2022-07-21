import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTNhanHieuComponent } from './ct-nhan-hieu.component';

describe('CTNhanHieuComponent', () => {
  let component: CTNhanHieuComponent;
  let fixture: ComponentFixture<CTNhanHieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTNhanHieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTNhanHieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
