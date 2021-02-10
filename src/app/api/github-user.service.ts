import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { USER_DETAILS, USER_FOLLOWERS } from './api-endpoints';
import { DEFAULT_HEADERS } from './default-headers';
import { RequestParamsHelper } from './helpers/request-params.helper';
import { RequestBaseModel } from './models/request-base.model';
import { UserModel } from './users/user.model';

@Injectable()
export class GithubUserService {
  constructor(private http: HttpClient) {}

  GetUserDetails(login: string): Observable<UserModel> {
    return this.http.get<UserModel>(
      `${environment.githubApiBaseUrl}${USER_DETAILS}/${login}`,
      { headers: DEFAULT_HEADERS }
    );
  }

  GetUserFollowers(
    login: string,
    req: RequestBaseModel
  ): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(
      `${environment.githubApiBaseUrl}${USER_DETAILS}/${login}${USER_FOLLOWERS}`,
      { headers: DEFAULT_HEADERS, params: RequestParamsHelper.getParams(req) }
    );
  }
}
