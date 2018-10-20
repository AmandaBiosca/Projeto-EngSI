import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavItemModel } from './models/nav-item.model';
import { Router } from '@angular/router';
import { NavService } from './services/nav.service';

@Component({
  selector: 'bv-sidenav-item',
  templateUrl: './bv-sidenav-item.component.html',
  styleUrls: ['./bv-sidenav-item.component.scss']
})
export class BvSidenavItemComponent implements OnInit {

  public expanded: boolean;
  public itemId: string;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItemModel;
  @Input() depth: number;

  constructor(private navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
    this.itemId = this.item.label.replace(/\s+/g, '').toLowerCase();
  }

  onItemSelected(item: NavItemModel) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      // this.navService.toggleNav();

    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
