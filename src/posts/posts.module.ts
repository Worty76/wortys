import { Module } from '@nestjs/common';
import { PostsService } from './services';
import { PostsController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
