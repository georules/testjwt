const jwt = require('jsonwebtoken')
const fs = require('fs')

const data = {
  hello:"world"
}

const certificate = fs.readFileSync('./secret')

const options = {
  algorithm: 'HS256'
}

const token = jwt.sign(data, certificate, options)

console.log(token)

const verify = jwt.verify(token, certificate)

console.log(verify)
