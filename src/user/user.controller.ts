import { Controller, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { uploadAvatarDto } from './dto/upload-avatar.dto';
import { hasAvatarDto } from './dto/has-avatar.dto';



@ApiTags('用户')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('all')
  async findAll() {
    let res = await this.userService.findAll()
    return res
  }
  @Post('avatar')
  async uploadAvatar(@Body() body:uploadAvatarDto) {
    let { username, avatar } = body
    if (avatar.length < 20) {
      avatar = `https://q2.qlogo.cn/headimg_dl?dst_uin=${avatar}&spec=100`
    } 
    let res = await this.userService.uploadAvatar(username, avatar)
    return res
  }
  @Post('hasavatar')
  async hasAvatar(@Body() body:hasAvatarDto ) {
    let { username } = body
    let res = await this.userService.hasAvatar(username)
    return res
  }

}
