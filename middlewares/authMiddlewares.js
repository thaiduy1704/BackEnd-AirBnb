import { login } from "../controllers/authController.js"
import { failCode } from "../utils/response.js";

const authorization = async (req, res, next) => {
  try {
    const isAuthorized = true
    if (isAuthorized) {
      console.log("authorization");
      next()
    } else {
      failCode(res)
    }


  } catch (error) {
    failCode(res)
  }
}
const authentication = async (req, res) => {
  try {
    res.send('authentication')
  } catch (error) {
    failCode(res)
  }
}

export { authorization, authentication }