import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieuxuatchitietComponent } from './ds-phieuxuatchitiet.component';

describe('DsPhieuxuatchitietComponent', () => {
  let component: DsPhieuxuatchitietComponent;
  let fixture: ComponentFixture<DsPhieuxuatchitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsPhieuxuatchitietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsPhieuxuatchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
