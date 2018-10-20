import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule,
         MatSidenavModule,
         MatListModule,
         MatToolbarModule
       } from '@angular/material';
import { BvSidenavComponent } from './bv-sidenav.component';
import { BvSidenavItemComponent } from './bv-sidenav-item.component';
import { BvScrollbarModule } from './../bv-scrollbar/bv-scrollbar.module';

@NgModule({
  declarations: [ BvSidenavComponent, BvSidenavItemComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    BvScrollbarModule
  ],
  exports: [
    BvSidenavComponent
  ]
})
export class BvSidenavModule { }
