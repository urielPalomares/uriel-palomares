import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';


@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,

    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MapsModule { }
