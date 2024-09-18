import { PostEntity } from 'src/posts/entities/';
import { Roles } from '../utility/common/user-roles.enum';

export interface IUser {
  id: number;
  name: string;
  password: string;
  role: Roles;
  posts?: PostEntity[];
}
