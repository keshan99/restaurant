import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow React frontend to connect
  app.enableCors();

  // Use port 4000 to match Express backend (or from env)
  const port = process.env.PORT ?? 4000;
  await app.listen(port);

  console.log(`NestJS Backend running on http://localhost:${port}`);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
