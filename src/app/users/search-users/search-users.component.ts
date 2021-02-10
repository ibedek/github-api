import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubSearchFormService } from 'src/app/api/github-search-form.service';
import { UserModel } from 'src/app/api/users/user.model';

@Component({
  templateUrl: './search-users.component.html',
})
export class SearchUsersComponent implements OnDestroy {
  constructor(
    public searchForm: GithubSearchFormService,
    private router: Router
  ) {}

  public usersSearchResults: UserModel[] = [];
  public totalResults = -1;
  public errorMessage = '';
  public formSubmitted = false;

  private searchSubscription: Subscription | null = null;

  ngOnDestroy(): void {
    if (this.searchSubscription !== null) {
      this.searchSubscription.unsubscribe();
    }
  }

  search(): void {
    this.formSubmitted = true;
    this.searchSubscription = this.searchForm.submit().subscribe(
      (data) => {
        this.usersSearchResults = data.items;
        this.totalResults = data.total_count;
        this.errorMessage = '';
      },
      (e) => {
        this.errorMessage = e.error.message;
      }
    );
  }

  openDetails(user: UserModel): void {
    const link = ['/users', 'details', user.login];
    this.router.navigate(link);
  }
}
