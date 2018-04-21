import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questions1Component } from './questions1.component';

describe('Questions1Component', () => {
  let component: Questions1Component;
  let fixture: ComponentFixture<Questions1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questions1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questions1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
