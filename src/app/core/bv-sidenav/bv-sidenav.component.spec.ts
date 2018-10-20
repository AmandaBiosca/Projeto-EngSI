import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NavService } from './services/nav.service';
import { BvSidenavComponent } from './bv-sidenav.component';
import { HttpClient } from '@angular/common/http';

describe('BvSidenavComponent', () => {
  let comp: BvSidenavComponent;
  let fixture: ComponentFixture<BvSidenavComponent>;

  beforeEach(() => {

    let mockHttp = { get: jest.fn() };
    const breakpointObserverStub = {
      observe: () => ({
        pipe: () => ({})
      })
    };
    const navServiceStub = {
      appDrawer: {}
    };
    TestBed.configureTestingModule({
      declarations: [BvSidenavComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BreakpointObserver, useValue: breakpointObserverStub },
        { provide: NavService, useValue: navServiceStub },
        { provide: HttpClient, useValue: mockHttp }
      ]
    });
    fixture = TestBed.createComponent(BvSidenavComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

});
