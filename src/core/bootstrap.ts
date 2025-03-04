import { INestApplication, ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import * as helmet from 'helmet';
import { RequestGuard } from './guards';

/**
 * Core bootstrap module should be loaded here.
 * @param app
 *
 */
export default async function bootstrap(app: INestApplication) {
  // Global Prefix
  // app.setGlobalPrefix('api');

  // middlewares, express specific
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
  app.use(helmet());

  // Auto-validation
  // We'll start by binding ValidationPipe at the application level, thus ensuring all endpoints are protected from receiving incorrect data.
  app.useGlobalPipes(new ValidationPipe());

  // guards
  app.useGlobalGuards(new RequestGuard());
}
