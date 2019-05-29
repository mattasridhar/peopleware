import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplJobinfoComponent } from './appl-jobinfo.component';

describe('ApplJobinfoComponent', () => {
  let component: ApplJobinfoComponent;
  let fixture: ComponentFixture<ApplJobinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplJobinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplJobinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
