import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KategoriExpressPage } from './kategori-express.page';

describe('KategoriExpressPage', () => {
  let component: KategoriExpressPage;
  let fixture: ComponentFixture<KategoriExpressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriExpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
