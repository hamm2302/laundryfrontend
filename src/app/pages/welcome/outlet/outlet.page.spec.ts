import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutletPage } from './outlet.page';

describe('OutletPage', () => {
  let component: OutletPage;
  let fixture: ComponentFixture<OutletPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
