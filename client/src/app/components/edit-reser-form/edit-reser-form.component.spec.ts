import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReserFormComponent } from './edit-reser-form.component';

describe('EditReserFormComponent', () => {
  let component: EditReserFormComponent;
  let fixture: ComponentFixture<EditReserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditReserFormComponent]
    });
    fixture = TestBed.createComponent(EditReserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
