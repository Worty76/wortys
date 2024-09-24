import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLikeDto } from '../dto';
import { UpdateLikeDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeEntity } from '../entities';
import { Repository } from 'typeorm';
import { PostEntity } from 'src/posts/entities';
import { UserEntity } from 'src/users/entities';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(LikeEntity)
    private likesRepository: Repository<LikeEntity>,
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(createLikeDto: CreateLikeDto) {
    const userId = createLikeDto.author.id;
    const user = await this.usersRepository.exists({ where: { id: userId } });

    if (!user) throw new BadRequestException('User is not exist!');

    const postId = createLikeDto.postId.id;
    const post = await this.postsRepository.exists({ where: { id: postId } });

    if (!post) throw new BadRequestException('Post is not exist!');
    console.log(createLikeDto);

    const like = this.likesRepository.create(createLikeDto);
    return await this.likesRepository.save(like);
  }

  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
