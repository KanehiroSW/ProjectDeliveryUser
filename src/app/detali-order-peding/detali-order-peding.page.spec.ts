import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetaliOrderPedingPage } from './detali-order-peding.page';

describe('DetaliOrderPedingPage', () => {
  let component: DetaliOrderPedingPage;
  let fixture: ComponentFixture<DetaliOrderPedingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliOrderPedingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
