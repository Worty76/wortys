import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto';
import { UpdateUserDto } from '../dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isUserExist = await this.findUserByEmail(createUserDto.email);

    if (isUserExist) throw new BadRequestException('Email is already in use');
    createUserDto.password = await hash(createUserDto.password, 10);

    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) throw new BadRequestException('User is not exist!');

    return this.usersRepository.remove(user);
  }

  async findUserByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }
}
