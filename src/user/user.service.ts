import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User,) {

  }
  async create(createUserDto: CreateUserDto) {
    let res = await this.userModel.build({
      ...createUserDto
    })
    await res.save()
    return res
  }
  async findAll() {
    let res = await this.userModel.findAll()
    return res
  }
  async find(createUserDto: CreateUserDto) {
    let res = await this.userModel.findOne({
      where: {
        ...createUserDto
      }
    })
    return res
  }
  async findOne(username: string) {
    let res = await this.userModel.findOne({
      where: {
        username
      }
    })
    return res !== null ? res : null
  }
  async uploadAvatar(username: string, avatar: string) {
    let res = await this.userModel.update({
      avatar
    }, {
      where: {
        username: username
      }
    })
    return {
      code: '200',
      msg: "上传成功",
      data: res
    }
  }
  async hasAvatar(username: string) {
    let res = await this.userModel.findOne({
      where: {
        username: username
      }
    })
    return res.avatar !== null
  }

}
