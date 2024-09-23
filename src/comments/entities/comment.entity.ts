import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IComment } from '../interfaces';
import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';

@Entity('comments')
export class CommentEntity implements IComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'userId' })
  author: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  @JoinColumn({ name: 'postId' })
  postId: PostEntity;
}
