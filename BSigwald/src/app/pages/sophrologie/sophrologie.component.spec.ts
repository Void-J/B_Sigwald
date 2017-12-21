import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SophrologieComponent } from './sophrologie.component';

describe('SophrologieComponent', () => {
  let component: SophrologieComponent;
  let fixture: ComponentFixture<SophrologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SophrologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SophrologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
