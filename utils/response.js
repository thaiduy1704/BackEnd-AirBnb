// 200
const successCode = (res, data) => {

  let dSend = {
    message: "Successful",

    data: data
  }

  res.status(200).send(dSend);
}

//400
const errorCode = (res, data) => {

  let dSend = {
    message: "ErrorCode",
    data: data
  }
  res.status(400).send(dSend);

}

//500
const failCode = (res) => {
  let dSend = {
    message: "FailCode!"
  }
  res.status(500).send(dSend);

}

export { successCode, errorCode, failCode }