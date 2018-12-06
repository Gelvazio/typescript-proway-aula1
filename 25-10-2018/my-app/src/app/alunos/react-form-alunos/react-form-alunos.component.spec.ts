import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormAlunosComponent } from './react-form-alunos.component';

describe('ReactFormAlunosComponent', () => {
  let component: ReactFormAlunosComponent;
  let fixture: ComponentFixture<ReactFormAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
