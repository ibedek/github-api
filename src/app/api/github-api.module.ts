import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsCommonModule } from '../_modules/forms-common.module';
import { GithubSearchFormService } from './github-search-form.service';
import { GithubSearchService } from './github-search.service';
import { GithubUserService } from './github-user.service';

@NgModule({
  imports: [CommonModule, FormsCommonModule],
  exports: [CommonModule, FormsCommonModule],
  providers: [GithubSearchService, GithubSearchFormService, GithubUserService],
})
export class GithubApiModule {}
