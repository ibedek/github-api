import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GithubSearchService } from './github-search.service';
import { SearchResponseModel } from './search/search-response.model';

@Injectable()
export class GithubSearchFormService {
  public form: FormGroup;

  constructor(private ghSearchService: GithubSearchService) {
    this.form = new FormGroup({
      q: new FormControl('', [Validators.required]),
      per_page: new FormControl(10, []),
    });
  }

  public submit(raw = false): Observable<SearchResponseModel> {
    const data = raw ? this.form.getRawValue() : this.form.value;
    return this.ghSearchService.SearchUsers(data);
  }
}
