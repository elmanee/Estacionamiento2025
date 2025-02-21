import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerFormComponent } from './edit-per-form.component';

describe('EditPerFormComponent', () => {
  let component: EditPerFormComponent;
  let fixture: ComponentFixture<EditPerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPerFormComponent]
    });
    fixture = TestBed.createComponent(EditPerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
