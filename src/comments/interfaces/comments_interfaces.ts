import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';
import { CommentEntity } from '../entities';

export interface IComment {
  id: string;
  content: string;
  author: UserEntity;
  postId: PostEntity;
  comments?: CommentEntity[];
  commentFatherId?: CommentEntity;
}
