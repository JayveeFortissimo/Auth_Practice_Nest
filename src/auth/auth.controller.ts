//!Need Pala neto for validation
import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { response, Response } from 'express';
import { Credentials } from 'Interface/credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  async signUp(
    @Body(ValidationPipe) body: Credentials,
    @Res() response: Response,
  ) {
    try {
      await this.authService.signUp(body, response);

      return response.status(HttpStatus.OK).json({
        message: 'SignUp Successfully',
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Cant sign Up!',
      });
    }
  }

  @Post('signIn')
  async userLogin(@Body() body: Credentials, @Res() response: Response) {
    try {
      await this.authService.signIN(body, response);
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: `Cannot signIn cuzz: ${error}`,
      });
    }
  }
}
