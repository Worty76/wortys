import { IsOptional, IsString, IsUUID } from 'class-validator';
import { CommentEntity } from 'src/comments/entities';
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

  @IsUUID()
  @IsString()
  @IsOptional()
  commentFatherId?: CommentEntity;
}
