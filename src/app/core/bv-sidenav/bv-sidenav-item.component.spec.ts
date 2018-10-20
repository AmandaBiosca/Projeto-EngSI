import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavItemModel } from './models/nav-item.model';
import { Router } from '@angular/router';
import { NavService } from './services/nav.service';
import { BvSidenavItemComponent } from './bv-sidenav-item.component';

describe('BvSidenavItemComponent', () => {
    let comp: BvSidenavItemComponent;
    let fixture: ComponentFixture<BvSidenavItemComponent>;

    beforeEach(() => {
        const navItemModelStub = {
            children: {
                length: {}
            },
            route: {}
        };
        const routerStub = {
            navigate: () => ({})
        };
        const navServiceStub = {};

        TestBed.configureTestingModule({
            declarations: [ BvSidenavItemComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Router, useValue: routerStub },
                { provide: NavService, useValue: navServiceStub }
            ]
        });
        fixture = TestBed.createComponent(BvSidenavItemComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
