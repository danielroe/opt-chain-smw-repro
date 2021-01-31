export default (req, res) => {
  console.log(process?.env?.TEST)
  res.end('Bob')
}
