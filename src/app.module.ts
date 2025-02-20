import { Module } from '@nestjs/common';
import { JayveeController } from './jayvee/jayvee.controller';
import { JayveeService } from './jayvee/jayvee.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ JayveeController, AuthController],
  providers: [ JayveeService, AuthService],
})
export class AppModule {}
