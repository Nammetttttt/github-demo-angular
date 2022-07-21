import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaNhanHieuComponent } from './sua-nhan-hieu.component';

describe('SuaNhanHieuComponent', () => {
  let component: SuaNhanHieuComponent;
  let fixture: ComponentFixture<SuaNhanHieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaNhanHieuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaNhanHieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
