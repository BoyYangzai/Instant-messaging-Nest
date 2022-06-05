import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { findMessageListDTO } from './dto/find-messageList.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Post('send')
  async create(@Body() createMessageDto: CreateMessageDto) {
    return await this.messageService.create(createMessageDto);
  }
  @Post('list')
  async findAll(@Body() findMessageListDTO: findMessageListDTO) {

    return await this.messageService.findMessageList(findMessageListDTO);
  }
}
