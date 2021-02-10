import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubUserService } from 'src/app/api/github-user.service';
import { UserModel } from 'src/app/api/users/user.model';
import { PageEventModel } from 'src/app/_common/pagination/page-event.model';

@Component({
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnDestroy {
  @Input() user: UserModel = new UserModel();

  public followers: UserModel[] = [];
  public currentPage = 1;

  private userSubscription: Subscription = new Subscription();
  private followersSubscription: Subscription = new Subscription();
  private routerSubscription: Subscription;

  private login: string | null = null;

  constructor(
    private ghUserService: GithubUserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routerSubscription = this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  init(): void {
    this.login = this.route.snapshot.paramMap.get('login');
    this.userSubscription = this.ghUserService
      .GetUserDetails(this.login?.toString() ?? '')
      .subscribe((r) => (this.user = r));
    this.loadFollowers();
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }

    if (this.followersSubscription) {
      this.followersSubscription.unsubscribe();
    }

    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  onPageEvent(pageEvent: PageEventModel): void {
    this.currentPage = pageEvent.page;
    this.loadFollowers();
  }

  goBack(): void {
    window.history.back();
  }

  private loadFollowers(): void {
    this.followersSubscription = this.ghUserService
      .GetUserFollowers(this.login?.toString() ?? '', {
        per_page: 10,
        page: this.currentPage,
      })
      .subscribe((r) => (this.followers = r));
  }
}
