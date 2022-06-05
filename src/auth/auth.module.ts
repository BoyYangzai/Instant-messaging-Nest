import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module
    ({
        imports: [
            UserModule,
            PassportModule,
            JwtModule.register({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [AuthService, LocalStrategy, JwtStrategy],
        exports: [AuthService, JwtModule],
    })
export class AuthModule { }