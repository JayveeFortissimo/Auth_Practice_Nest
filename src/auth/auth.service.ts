import { Injectable } from '@nestjs/common';
import { Credentials } from 'Interface/credentials.dto';
import { Hashedpassword } from 'Utils/HashPassword';
import { Response } from 'express';



import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  public prismaClient = new PrismaClient();

  async signUp(body: Credentials, response) {
    const { email, password, username } = body;

    const hashedPassword = await Hashedpassword(password);

    const emailExist = await this.prismaClient.credentials.findUnique({
      where: { email: email },
    });

    if (emailExist)
      return response.json({ message: 'Email is already Exist!' });

    const Creates = await this.prismaClient.credentials.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    return Creates;
  }



}
