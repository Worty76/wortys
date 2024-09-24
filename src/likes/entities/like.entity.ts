import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('likes')
export class LikeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => PostEntity, (post) => post.likes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'postId' })
  postId: PostEntity;

  @ManyToOne(() => UserEntity, (user) => user.likes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'author' })
  author: UserEntity;
}
