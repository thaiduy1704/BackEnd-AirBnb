import jwt from 'jsonwebtoken'
import { comparePassword, hashPassword } from './bcrypt.js'


const createJWT = () => {


  const token = jwt.sign({
    name: "ThaiDuy", age: 22
  }, process.env.JWT_SECRET_KEY,)
  console.log(token);
}
const verifyJWT = () => {

  const checkToken = jwt.verify(process.env.TOKEN, process.env.JWT_SECRET_KEY)
  console.log(checkToken);

}

export { createJWT, verifyJWT }