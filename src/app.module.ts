import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JayveeController } from './jayvee/jayvee.controller';
import { JayveeService } from './jayvee/jayvee.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, JayveeController, AuthController],
  providers: [AppService, JayveeService, AuthService],
})
export class AppModule {}
