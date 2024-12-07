import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let mockUserModel = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should return a JWT token for valid credentials', async () => {
      const user = { username: 'testUser', password: await bcrypt.hash('testPassword', 10), id: '123' };
      mockUserModel.findOne.mockReturnValue(user);

      const result = await service.login({ username: 'testUser', password: 'testPassword' });
      expect(result).toHaveProperty('access_token');
    });

    it('should throw an error if user not found', async () => {
      mockUserModel.findOne.mockReturnValue(null);
      await expect(service.login({ username: 'invalidUser', password: 'testPassword' })).rejects.toThrow('User not found');
    });

    it('should throw an error if password is invalid', async () => {
      const user = { username: 'testUser', password: await bcrypt.hash('testPassword', 10), id: '123' };
      mockUserModel.findOne.mockReturnValue(user);

      await expect(service.login({ username: 'testUser', password: 'wrongPassword' })).rejects.toThrow('Invalid password');
    });
  });
});