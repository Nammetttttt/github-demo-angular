import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQNhomQuyenComponent } from './pq-nhom-quyen.component';

describe('PQNhomQuyenComponent', () => {
  let component: PQNhomQuyenComponent;
  let fixture: ComponentFixture<PQNhomQuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQNhomQuyenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQNhomQuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
