//Importmo lng yung bycrpt na install mo
import * as bcrypt from 'bcrypt';


  //!Create Lang ng Hashed password
  export function Hashedpassword(passsword: string) {
    const saltOrRounds = 10;
    const hashed =  bcrypt.hash(passsword, saltOrRounds);

    return hashed;
  }