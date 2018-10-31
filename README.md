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

# TODOs
+ Generate rsa keypair, ensure that the private key is not committed to source code
+ Use RS256 algorithm instead of HS256 (asymmetric instead of symmetric) https://www.youtube.com/watch?v=Fy9Myk_INX8
+ Sign JWT with private key
+ Verify JWT with public key
+ Add a expiration time for the JWT
+ Sign JWT with expiration, verify that JWT is not valid when expired
