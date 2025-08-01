import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessAndSecurityPage } from './access-and-security.page';

describe('AccessAndSecurityPage', () => {
  let component: AccessAndSecurityPage;
  let fixture: ComponentFixture<AccessAndSecurityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessAndSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
