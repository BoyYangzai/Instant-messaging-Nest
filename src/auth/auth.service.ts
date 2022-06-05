import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user) {
            const passwordCompare = await bcrypt.compare(pass, user.password)
            //https://docs.nestjs.com/security/encryption-and-hashing#encryption
            if (user && passwordCompare) {
                const { password, ...result } = user;
                return result;
            }
            return null
        } else {
            return null
       }
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            code: '200',
            access_token: this.jwtService.sign(payload),
            msg:'登录成功'
        };
    }

}