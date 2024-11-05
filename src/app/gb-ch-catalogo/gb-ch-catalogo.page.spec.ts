import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GBCHCatalogoPage } from './gb-ch-catalogo.page';

describe('GBCHCatalogoPage', () => {
  let component: GBCHCatalogoPage;
  let fixture: ComponentFixture<GBCHCatalogoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GBCHCatalogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
