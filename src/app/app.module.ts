import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { NavBarComponent } from './components/layouts/core/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MasterComponent } from './components/layouts/master/master.component';
import { SideBarComponent } from './components/layouts/core/side-bar/side-bar.component';
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DashboardComponent } from './components/layouts/dashboard/dashboard.component';
import { MessageComponent } from './components/share/message/message.component';
import { InputSearchComponent } from './components/share/input-search/input-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavBarComponent,
    MasterComponent,
    SideBarComponent,
    SideBarComponent,
    DashboardComponent,
    MessageComponent,
    InputSearchComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
