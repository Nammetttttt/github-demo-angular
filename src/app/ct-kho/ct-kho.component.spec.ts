import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTKhoComponent } from './ct-kho.component';

describe('CTKhoComponent', () => {
  let component: CTKhoComponent;
  let fixture: ComponentFixture<CTKhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTKhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
