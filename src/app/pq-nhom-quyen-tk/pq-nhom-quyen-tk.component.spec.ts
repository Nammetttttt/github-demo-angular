import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQNhomQuyenTKComponent } from './pq-nhom-quyen-tk.component';

describe('PQNhomQuyenTKComponent', () => {
  let component: PQNhomQuyenTKComponent;
  let fixture: ComponentFixture<PQNhomQuyenTKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQNhomQuyenTKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQNhomQuyenTKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
