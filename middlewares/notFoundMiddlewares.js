const notFoundMiddleware = async (req, res) => {
  try {
    res.send('Not Found Routes')
  } catch (error) {
    failCode(res)
  }
}
export { notFoundMiddleware }