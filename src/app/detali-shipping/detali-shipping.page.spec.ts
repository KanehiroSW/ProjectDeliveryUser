import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetaliShippingPage } from './detali-shipping.page';

describe('DetaliShippingPage', () => {
  let component: DetaliShippingPage;
  let fixture: ComponentFixture<DetaliShippingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliShippingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
