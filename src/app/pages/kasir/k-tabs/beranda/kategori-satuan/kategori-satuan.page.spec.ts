import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KategoriSatuanPage } from './kategori-satuan.page';

describe('KategoriSatuanPage', () => {
  let component: KategoriSatuanPage;
  let fixture: ComponentFixture<KategoriSatuanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriSatuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
