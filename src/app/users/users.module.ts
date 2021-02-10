import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsCommonModule } from '../_modules/forms-common.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UsersComponent } from './users.component';
import { UserFollowersComponent } from './user-details/user-followers/user-followers.component';
import { CommonComponentsModule } from '../_common/common-components.module';

@NgModule({
  declarations: [
    UsersComponent,
    SearchUsersComponent,
    UserDetailsComponent,
    UserFollowersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsCommonModule,
    UsersRoutingModule,
    CommonComponentsModule,
  ],
})
export class UsersModule {}
