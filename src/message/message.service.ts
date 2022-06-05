import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './model/message.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message) private messageModel: typeof Message
  ) { }

  async create(createMessageDto: CreateMessageDto) {
    const time = Date.now()
    await this.messageModel.create(createMessageDto)
    return {
      code: '200',
      msg: '发送成功'
    }
  }
  async findMessageList(findMessageListObj) {
    console.log(findMessageListObj)
    const res1 = await this.messageModel.findAll({
      where: {
        sender: findMessageListObj.username,
        receiver: findMessageListObj.currentChater
      }
    })
    const res2 = await this.messageModel.findAll({
      where: {
        sender: findMessageListObj.currentChater,
        receiver: findMessageListObj.username
      }
    })
    return {
      code: '200',
      msg: '查询成功',
      data: {
        messageList: [
          ...res1,
          ...res2
        ].sort((a, b) => a.id - b.id)
      }
    }
  }

}
