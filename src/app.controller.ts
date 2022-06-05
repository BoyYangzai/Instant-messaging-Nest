import { Controller, Get, Post, UseGuards, Request, Bind, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginDTO } from './auth/dto/login.dto';
import { CreateUserDto } from './user/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) { }

  @ApiTags('JWT登录注册')
  @Post('auth/register')
  async AuthRegister(@Body() user: CreateUserDto) {
    return await this.appService.register(user)
  }
  @ApiTags('JWT登录注册')
  @Post('auth/login')
  async AuthLogin(@Body() loginParmas: LoginDTO) {
    return await this.appService.login(loginParmas)
  }
}
