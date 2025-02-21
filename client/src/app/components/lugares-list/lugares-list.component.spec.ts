import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresListComponent } from './lugares-list.component';

describe('LugaresListComponent', () => {
  let component: LugaresListComponent;
  let fixture: ComponentFixture<LugaresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LugaresListComponent]
    });
    fixture = TestBed.createComponent(LugaresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
