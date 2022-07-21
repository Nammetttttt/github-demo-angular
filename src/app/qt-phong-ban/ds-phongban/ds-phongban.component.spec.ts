import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhongbanComponent } from './ds-phongban.component';

describe('DsPhongbanComponent', () => {
  let component: DsPhongbanComponent;
  let fixture: ComponentFixture<DsPhongbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhongbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
