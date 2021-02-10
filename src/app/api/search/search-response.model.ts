import { UserModel } from '../users/user.model';

export interface SearchResponseModel {
  total_count: number;
  incomplete_results: boolean;
  items: Array<UserModel>;
}
