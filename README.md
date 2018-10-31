# Install & Run
+ Install nodejs
+ Install this project's libraries `npm install`
+ Run application `node index.js`

# JWT library
+ https://github.com/auth0/node-jsonwebtoken
+ https://jwt.io/

# RSA Keypair

## Generate rsa private key
`openssl genrsa -out key.pem 2048`
## Extract rsa public key
`openssl rsa -in key.pem -outform PEM -pubout -out public.pem`
