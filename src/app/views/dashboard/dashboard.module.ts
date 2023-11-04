import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavigationModule } from 'src/app/shared/navigation/navigation.module';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavigationModule
  ]
})
export class DashboardModule { }
