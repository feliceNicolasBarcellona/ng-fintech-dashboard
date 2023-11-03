import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FilterByIdPipe } from './shared/pipes/filter-by-id.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { NavigationModule } from './shared/navigation/navigation.module';



@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    FilterByIdPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
