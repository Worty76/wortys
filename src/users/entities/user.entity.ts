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

@Entity('users')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Roles, array: true, default: [Roles.USER] })
  role: Roles;

  @OneToMany(() => PostEntity, (post) => post.author)
  @JoinColumn()
  posts?: PostEntity[];
}
