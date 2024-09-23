import { IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from 'src/users/entities';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  author: UserEntity;
}
