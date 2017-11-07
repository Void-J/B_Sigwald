import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CohérenceComponent } from './cohérence.component';

describe('CohérenceComponent', () => {
  let component: CohérenceComponent;
  let fixture: ComponentFixture<CohérenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CohérenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CohérenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
