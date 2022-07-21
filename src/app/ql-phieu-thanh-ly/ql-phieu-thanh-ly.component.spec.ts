import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLPhieuThanhLyComponent } from './ql-phieu-thanh-ly.component';

describe('QLPhieuThanhLyComponent', () => {
  let component: QLPhieuThanhLyComponent;
  let fixture: ComponentFixture<QLPhieuThanhLyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLPhieuThanhLyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLPhieuThanhLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
