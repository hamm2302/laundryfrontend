import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KategoriKiloanPage } from './kategori-kiloan.page';

describe('KategoriKiloanPage', () => {
  let component: KategoriKiloanPage;
  let fixture: ComponentFixture<KategoriKiloanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriKiloanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
