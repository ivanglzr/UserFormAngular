import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './services/user.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent, LoginFormComponent, UserPageComponent, EditFormComponent, ErrorPageComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [UserService, appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
