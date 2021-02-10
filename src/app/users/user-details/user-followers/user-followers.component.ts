import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/api/users/user.model';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
})
export class UserFollowersComponent {
  @Input() followers: UserModel[] = [];

  constructor(private router: Router) {}

  openDetails(user: UserModel): void {
    const link = ['/', 'users', 'details', user.login];
    this.router.navigate(link);
  }
}
