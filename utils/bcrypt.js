import bcrypt from 'bcrypt'

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
    ;
}
const comparePassword = (password, hashPassword) => bcrypt.compareSync(password, hashPassword)
export { hashPassword, comparePassword }