import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './ws/event.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/model/message.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'yang',
      password: 'niupi666',
      database: 'nest',
      models: [User, Message],
      autoLoadModels: true
    }),
    SequelizeModule.forFeature([User, Message]),
    UserModule,
    AuthModule,
    EventsModule,
    MessageModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
