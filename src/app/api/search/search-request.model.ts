import { RequestBaseModel } from '../models/request-base.model';

export interface SearchRequestModel extends RequestBaseModel {
  q: string;
}
