import { IsString } from 'class-validator';
import { UserEntity } from 'src/users/entities';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  description: string;

  author: UserEntity;
}
