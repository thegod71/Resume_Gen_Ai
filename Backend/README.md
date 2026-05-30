// Maka server then setup mongodb
// is setup Mongodb we have fave the problem of DNS
==>
During Logout time we does not only delete the token form the cookies there is concept of token blacklisting {why normal delete is not work or it is not safe because let assume that during login someone copy your token but after some time you see that your account is compromised so you directly logout but if in the backend {delete the token form the cookies} but at this time there is token present someone so it is not safe} so to solve this problem concept of token blacklist in this when we logout then token is sent to the server and first server delete the token form the cookie and then it put that token in the list of blacklist so nobody can assess with that token.in this project we do token blacklisting with the help of mongodb
=
