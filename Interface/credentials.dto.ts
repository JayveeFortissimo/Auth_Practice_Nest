import {IsEmpty, IsEmail, IsString} from 'class-validator';


export class Credentials{

    @IsEmpty()
    @IsString()
    username:string

    @IsEmail()
    @IsString()
    @IsEmpty()
    email:string

    @IsEmpty()
    @IsString()
    password:string

}