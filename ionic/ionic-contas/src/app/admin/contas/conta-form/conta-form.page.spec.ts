import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaFormPage } from './conta-form.page';

describe('ContaFormPage', () => {
  let component: ContaFormPage;
  let fixture: ComponentFixture<ContaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
