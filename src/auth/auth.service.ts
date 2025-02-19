import { Injectable } from '@nestjs/common';
import { Credentials } from 'Interface/credentials.dto';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';

import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {

     public prismaClient = new PrismaClient();
    
  async signUp(body: Credentials) {
    const { email, password, username } = body;


   const hashedPassword = await this.Hashedpassword(password);

   const Creates =  await this.prismaClient.credentials.create({
      data:{
        username:username,
        email:email,
        password:hashedPassword
      }
    })

    return Creates

  }

  async Hashedpassword(passsword: string) {
    const saltOrRounds = 10;

    const hashed = await bcrypt.hash(passsword, saltOrRounds);
    return hashed;
  }
}
