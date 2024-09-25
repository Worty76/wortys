import { Module } from '@nestjs/common';
import { ChatsService } from './services';
import { ChatsController } from './controllers';

@Module({
  controllers: [ChatsController],
  providers: [ChatsService],
})
export class ChatsModule {}
