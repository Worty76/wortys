import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto';
import { UpdateCommentDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from '../entities/comment.entity';
import { UserEntity } from 'src/users/entities';
import { PostEntity } from 'src/posts/entities';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const user = createCommentDto.author;
    const isUserExist = await this.usersRepository.exists({
      where: { id: user.id },
    });

    if (!isUserExist) throw new BadRequestException('User is not found');

    const post = createCommentDto.postId;

    const isPostExist = await this.postsRepository.exists({
      where: { id: post.id },
    });

    if (!isPostExist) throw new BadRequestException('Post is not found');

    const comment = this.commentsRepository.create(createCommentDto);

    return await this.commentsRepository.save(comment);
  }

  async findAll() {
    return await this.commentsRepository.find({});
  }

  findOne(id: string) {
    const comment = this.commentsRepository.findOne({
      where: { id },
      relations: ['author', 'postId', 'commentFatherId'],
    });
    return comment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
