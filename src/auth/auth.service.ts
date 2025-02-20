import { Injectable, BadRequestException } from '@nestjs/common';
import { Credentials } from 'Interface/credentials.dto';
import { Hashedpassword, ComparePasswrod } from 'Utils/HashPassword';
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

  async signIN(body: Credentials, response) {
    const { email, password } = body;

    const foundUser = await this.prismaClient.credentials.findUnique({
      where: { email: email },
    });

    if (!foundUser) throw new BadRequestException('Wrong Credentials!');

    const validPassword = await ComparePasswrod(password, foundUser.password);

    if (!validPassword)
      throw new BadRequestException('Password are not matched!');

    return response
      .status(200)
      .json({ message: `Welcome user: ${foundUser.username}` });
  }
}
