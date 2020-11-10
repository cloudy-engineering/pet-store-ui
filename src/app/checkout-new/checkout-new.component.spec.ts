import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutNewComponent } from './checkout-new.component';

describe('CheckoutNewComponent', () => {
  let component: CheckoutNewComponent;
  let fixture: ComponentFixture<CheckoutNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
