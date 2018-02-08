import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component ,Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { DataPanelComponent } from './data-panel/data-panel.component';
import { AppRoutingModule } from './/app-routing.module';

import { LoginService } from './services/Login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationFormComponent,
    MasterPageComponent,
    LeftPanelComponent,
    TopPanelComponent,
    DataPanelComponent
  ],
    imports :[
      BrowserModule,
      FormsModule,
      AppRoutingModule,
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
  
})
export class AppModule { }
