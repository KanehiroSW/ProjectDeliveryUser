import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetaliOrderPage } from './detali-order.page';

describe('DetaliOrderPage', () => {
  let component: DetaliOrderPage;
  let fixture: ComponentFixture<DetaliOrderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
