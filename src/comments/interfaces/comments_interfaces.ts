import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';

export interface IComment {
  id: string;
  content: string;
  author: UserEntity;
  postId: PostEntity;
}
