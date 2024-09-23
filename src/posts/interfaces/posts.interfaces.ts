import { CommentEntity } from 'src/comments/entities/comment.entity';
import { UserEntity } from 'src/users/entities';

export interface IPost {
  id: string;
  title: string;
  content: string;
  description?: string;
  author?: UserEntity;
  comments?: CommentEntity[];
}
