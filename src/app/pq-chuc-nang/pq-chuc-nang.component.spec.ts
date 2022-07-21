import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PQChucNangComponent } from './pq-chuc-nang.component';

describe('PQChucNangComponent', () => {
  let component: PQChucNangComponent;
  let fixture: ComponentFixture<PQChucNangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PQChucNangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PQChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
