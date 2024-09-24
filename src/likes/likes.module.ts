import { Module } from '@nestjs/common';
import { LikesService } from './services';
import { LikesController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeEntity } from './entities';
import { UserEntity } from 'src/users/entities';
import { PostEntity } from 'src/posts/entities';

@Module({
  imports: [TypeOrmModule.forFeature([LikeEntity, UserEntity, PostEntity])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
