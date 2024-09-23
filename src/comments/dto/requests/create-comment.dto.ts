import { IsString, IsUUID } from 'class-validator';
import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';

export class CreateCommentDto {
  @IsString()
  content: string;

  @IsUUID()
  @IsString()
  author: UserEntity;

  @IsUUID()
  @IsString()
  postId: PostEntity;
}
