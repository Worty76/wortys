import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => CommentEntity, (comment) => comment.commentFatherId)
  @JoinColumn()
  comments?: CommentEntity[];

  @ManyToOne(() => CommentEntity, (comment) => comment.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentFatherId' })
  commentFatherId?: CommentEntity;

  @ManyToOne(() => UserEntity, (user) => user.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  author: UserEntity;

  @ManyToOne(() => PostEntity, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'postId' })
  postId: PostEntity;
}
