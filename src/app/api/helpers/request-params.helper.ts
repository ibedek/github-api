import { HttpParams } from '@angular/common/http';

export class RequestParamsHelper {
  public static getParams(req: any): HttpParams {
    let params: HttpParams = new HttpParams();
    for (const key in req) {
      if (req[key]) {
        params = params.append(key, req[key]);
      }
    }

    return params;
  }
}
