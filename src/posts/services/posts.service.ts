import { BadRequestException, Injectable } from '@nestjs/common';
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
      relations: ['author', 'comments', 'likes'],
    });
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.findOneBy({ id });

    post.title = updatePostDto.title;
    post.content = updatePostDto.content;
    post.description = updatePostDto.description;

    const newPost = this.postsRepository.create(post);
    return this.postsRepository.save(newPost);
  }

  async remove(id: string) {
    const post = await this.postsRepository.findOneBy({ id });

    if (!post) throw new BadRequestException('Post is not exist!');
    return await this.postsRepository.remove(post);
  }
}
