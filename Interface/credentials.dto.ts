import { IsEmail, IsString} from 'class-validator';


export class Credentials{
    @IsString()
    username:string

    @IsString()
    @IsEmail()
    email:string

    @IsString()
    password:string

}