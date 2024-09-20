import { UserEntity } from 'src/users/entities';

export interface IPost {
  id: string;
  title: string;
  content: string;
  description?: string;
  author?: UserEntity;
}
