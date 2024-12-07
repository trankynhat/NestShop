import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../schemas/user.schema'; // Import User model
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  // Tạo JWT token
  async login(loginDto: { username: string, password: string }) {
    const { username, password } = loginDto;

    // Tìm người dùng trong cơ sở dữ liệu
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Đăng ký người dùng mới
  async register(registerDto: { username: string, email: string, password: string }) {
    const { username, email, password } = registerDto;

    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new Error('Email already exists');
    }

    // Băm mật khẩu trước khi lưu vào database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Lưu người dùng mới vào database
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });
    
    await newUser.save();
    return {
      message: 'User registered successfully',
    };
  }
}
