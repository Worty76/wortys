import { IsUUID } from 'class-validator';
import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';

export class CreateLikeDto {
  @IsUUID()
  postId: PostEntity;

  @IsUUID()
  author: UserEntity;
}
