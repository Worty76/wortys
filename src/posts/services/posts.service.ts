import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto';
import { UpdatePostDto } from '../dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../entities';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const post = this.postsRepository.create(createPostDto);

    return this.postsRepository.save(post);
  }

  findAll() {
    const posts = this.postsRepository.find();
    return posts;
  }

  findOne(id: string) {
    const post = this.postsRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
