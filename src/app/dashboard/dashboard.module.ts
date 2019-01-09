import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import {LayoutModule} from '../layout/layout.module';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ],
  declarations: [DashboradComponent,UserComponent]
})
export class DashboardModule { }
