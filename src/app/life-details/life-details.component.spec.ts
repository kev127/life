import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDetailsComponent } from './life-details.component';

describe('LifeDetailsComponent', () => {
  let component: LifeDetailsComponent;
  let fixture: ComponentFixture<LifeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
