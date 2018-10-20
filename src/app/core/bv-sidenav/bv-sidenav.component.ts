import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BvSidenavConfigModel } from './models/bv-sidenav-config.model';
import { NavService } from './services/nav.service';
import { BvRolesService } from '@bv/spa-framework';


@Component({
  selector: 'bv-sidenav',
  templateUrl: './bv-sidenav.component.html',
  styleUrls: ['./bv-sidenav.component.scss']
})
export class BvSidenavComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') appDrawer: ElementRef;
  @Input() settings: BvSidenavConfigModel;
  public itemsList: any[];
  private hasAccess: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, 
              private navService: NavService, 
              private rolesService: BvRolesService) {}

  ngOnInit() {
    this.validateItemsListCredentials(this.settings.items);
    this.itemsList = this.settings.items;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  validateItemsListCredentials(list: any[]) {
    list.forEach(item => {
      this.validateUserAccess(item.roles);
      item.displayNavItem = this.hasAccess;

      if (item.children) {
        this.validateItemsListCredentials(item.children);
      }
    });
  }

  validateUserAccess(userRoles: string[]) {
    this.rolesService.userInRoles(userRoles).subscribe((result) => {
      this.hasAccess = result;
    });
  }

}
