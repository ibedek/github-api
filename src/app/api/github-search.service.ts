import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchRequestModel } from './search/search-request.model';
import { SearchResponseModel } from './search/search-response.model';
import { SEARCH_USERS } from './api-endpoints';
import { DEFAULT_HEADERS } from './default-headers';
import { Injectable } from '@angular/core';
import { RequestParamsHelper } from './helpers/request-params.helper';

@Injectable()
export class GithubSearchService {
  constructor(private http: HttpClient) {}

  public SearchUsers(req: SearchRequestModel): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>(
      `${environment.githubApiBaseUrl}${SEARCH_USERS}`,
      { headers: DEFAULT_HEADERS, params: RequestParamsHelper.getParams(req) }
    );
  }
}
