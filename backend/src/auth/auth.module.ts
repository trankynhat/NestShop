import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../jwt-strategy/jwt-strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { User, UserSchema } from '../schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'TranKyNhat', // Thay bằng giá trị bí mật thực tế
      signOptions: { expiresIn: '60m' }, // Token hết hạn sau 60 phút
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Đăng ký schema User
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
