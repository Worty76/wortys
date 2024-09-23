import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Roles } from '../utility/common/user-roles.enum';
import { PostEntity } from 'src/posts/entities';
import { IUser } from '../interfaces';
import { CommentEntity } from 'src/comments/entities/comment.entity';

@Entity('users')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Roles, array: true, default: [Roles.USER] })
  role: Roles;

  @OneToMany(() => PostEntity, (post) => post.author)
  @JoinColumn()
  posts?: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  @JoinColumn()
  comments?: CommentEntity[];
}
