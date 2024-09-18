import { Module } from '@nestjs/common';
import { UsersModule } from './users';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { PostsModule } from './posts';
import { CommentsModule } from './comments/comments.module';
import { MessagesModule } from './messages/messages.module';
import { ChatsModule } from './chats/chats.module';
import { LikesModule } from './likes/likes.module';
import { FollowsModule } from './follows/follows.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    PostsModule,
    CommentsModule,
    MessagesModule,
    ChatsModule,
    LikesModule,
    FollowsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
