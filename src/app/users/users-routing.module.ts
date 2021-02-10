import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        component: UserDetailsComponent,
        path: 'details/:login',
      },
      {
        component: SearchUsersComponent,
        path: 'search',
      },
    ],
    component: UsersComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
