import {IsEmpty, IsEmail, IsString} from 'class-validator';


export class Credentials{

    @IsEmpty()
    @IsString()
    username:string

    @IsString()
    @IsEmpty()
    @IsEmail()
    email:string

    @IsEmpty()
    @IsString()
    password:string

}