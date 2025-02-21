import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioseListComponent } from './iniciose-list.component';

describe('InicioseListComponent', () => {
  let component: InicioseListComponent;
  let fixture: ComponentFixture<InicioseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioseListComponent]
    });
    fixture = TestBed.createComponent(InicioseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
