import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoomentariosPage } from './coomentarios.page';

describe('CoomentariosPage', () => {
  let component: CoomentariosPage;
  let fixture: ComponentFixture<CoomentariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoomentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
