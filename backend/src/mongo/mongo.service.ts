import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MongoService implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    try {
      // Kiểm tra kết nối
      await this.connection.db.admin().ping();
      console.log('Successfully connected to MongoDB!');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }
}
