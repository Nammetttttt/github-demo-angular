import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieuthanhlyComponent } from './ds-phieuthanhly.component';

describe('DsPhieuthanhlyComponent', () => {
  let component: DsPhieuthanhlyComponent;
  let fixture: ComponentFixture<DsPhieuthanhlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieuthanhlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieuthanhlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
