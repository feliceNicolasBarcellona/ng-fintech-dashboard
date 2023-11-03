import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { MovementsComponent } from './views/movements/movements.component';
import { MovementComponent } from './views/movement/movement.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FilterByIdPipe } from './shared/pipes/filter-by-id.pipe';
import { TransferComponent } from './views/transfer/transfer.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { NavigationModule } from './shared/navigation/navigation.module';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LoginComponent,
    MovementsComponent,
    MovementComponent,
    TruncatePipe,
    FilterByIdPipe,
    TransferComponent,
    ContactsComponent,
    ContactListComponent,
    FilterPipe,
    ContactFormComponent,
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
