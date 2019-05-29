import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplApplyComponent } from './appl-apply.component';

describe('ApplApplyComponent', () => {
  let component: ApplApplyComponent;
  let fixture: ComponentFixture<ApplApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
