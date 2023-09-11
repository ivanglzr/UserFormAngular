import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

const appRoutes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'register', component: UserFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'edit-user/:id', component: EditFormComponent },
  { path: 'user-page/:id', component: UserPageComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
