import { UserEntity } from 'src/users/entities/user.entity';

export interface IPost {
  id: string;
  title: string;
  content: string;
  description?: string;
  author?: UserEntity;
}
