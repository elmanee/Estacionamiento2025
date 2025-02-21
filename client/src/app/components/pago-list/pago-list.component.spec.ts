import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoListComponent } from './pago-list.component';

describe('PagoListComponent', () => {
  let component: PagoListComponent;
  let fixture: ComponentFixture<PagoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoListComponent]
    });
    fixture = TestBed.createComponent(PagoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
