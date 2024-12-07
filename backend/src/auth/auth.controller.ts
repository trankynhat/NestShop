import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../jwt-strategy/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint đăng nhập: Tạo JWT token
  @Post('login')
  async login(@Body() loginDto: { username: string, password: string }) {
    return this.authService.login(loginDto);
  }

  // Endpoint đăng ký người dùng mới
  @Post('register')
  async register(@Body() registerDto: { username: string, email: string, password: string }) {
    // Gọi service đăng ký
    return this.authService.register(registerDto);
  }

  // Endpoint được bảo vệ: Chỉ truy cập nếu có JWT hợp lệ
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtectedData(@Request() req) {
    return {
      message: 'You have accessed a protected route!',
      user: req.user, // Thông tin user từ token
    };
  }
}
