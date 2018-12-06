import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormContatoComponent } from './react-form-contato.component';

describe('ReactFormContatoComponent', () => {
  let component: ReactFormContatoComponent;
  let fixture: ComponentFixture<ReactFormContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
