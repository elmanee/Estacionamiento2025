import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioseFormComponent } from './iniciose-form.component';

describe('InicioseFormComponent', () => {
  let component: InicioseFormComponent;
  let fixture: ComponentFixture<InicioseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioseFormComponent]
    });
    fixture = TestBed.createComponent(InicioseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
