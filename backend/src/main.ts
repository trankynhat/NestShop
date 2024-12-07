import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Chỉ cho phép yêu cầu từ origin này
  });
  await app.listen(8080); // Chạy trên cổng 3000 hoặc cổng bạn chọn
  console.log('Application is running on: http://localhost:8080');
}
bootstrap();
