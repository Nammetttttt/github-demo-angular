import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQNhomQuyenCNComponent } from './pq-nhom-quyen-cn.component';

describe('PQNhomQuyenCNComponent', () => {
  let component: PQNhomQuyenCNComponent;
  let fixture: ComponentFixture<PQNhomQuyenCNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQNhomQuyenCNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQNhomQuyenCNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
