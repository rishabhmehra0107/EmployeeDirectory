import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FilterComponent } from './filter/filter.component';
import { EmployeeComponent } from './employee/employee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ViewmoreComponent } from './viewmore/viewmore.component'

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FilterComponent,
    EmployeeComponent,
    ViewmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
