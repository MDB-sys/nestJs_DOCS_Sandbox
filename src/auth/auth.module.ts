import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '..//users/users.module';
import { jwtConstants } from './auth.constant';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService,LocalStrategy],
  imports : [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret : jwtConstants.secret,
      signOptions: {expiresIn: '60s'}
    })
  ],
  exports :[AuthService]
})
export class AuthModule {}
