import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoService } from './mongo/mongo.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://trankynhat:Nhat%4003072002@cluster0.ihs10.mongodb.net/yensao?retryWrites=true&w=majority',
    ),
    ProductsModule,
    AuthModule,
  ],
  providers: [MongoService, JwtStrategy],
})
export class AppModule {}