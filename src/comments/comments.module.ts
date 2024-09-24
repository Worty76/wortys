import { Module } from '@nestjs/common';
import { CommentsService } from './services';
import { CommentsController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entities';
import { UserEntity } from 'src/users/entities';
import { PostEntity } from 'src/posts/entities';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity, PostEntity])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
