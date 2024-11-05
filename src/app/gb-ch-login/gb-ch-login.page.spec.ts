import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GBCHLoginPage } from './gb-ch-login.page';

describe('GBCHLoginPage', () => {
  let component: GBCHLoginPage;
  let fixture: ComponentFixture<GBCHLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GBCHLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
