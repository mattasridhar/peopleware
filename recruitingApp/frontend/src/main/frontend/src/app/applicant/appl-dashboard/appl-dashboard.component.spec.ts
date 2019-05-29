import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplDashboardComponent } from './appl-dashboard.component';

describe('ApplDashboardComponent', () => {
  let component: ApplDashboardComponent;
  let fixture: ComponentFixture<ApplDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
