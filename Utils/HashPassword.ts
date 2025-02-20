//Importmo lng yung bycrpt na install mo
import * as bcrypt from 'bcrypt';

//!Create Lang ng Hashed password
export function Hashedpassword(password: string) {
  const saltOrRounds = 10;
  const hashed = bcrypt.hash(password, saltOrRounds);

  return hashed;
}



export async function ComparePasswrod(password:string, HashedPassword:string){

return await bcrypt.compare(password,HashedPassword);

}
