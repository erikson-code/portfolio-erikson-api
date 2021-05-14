
const jwt = require('express-jwt')

const jwksRsa = require('jwks-rsa')

//Authentication middleware
//THis middleware will check access token in authorization headers of request
// It will verify access token against Auth0 Json web key set
exports.checkJwt = jwt({

    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: 'https://erikson.jp.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://erikson.jp.auth0.com/api/v2/',
    issuer: 'https://erikson.jp.auth0.com/',
    algorithms: ['RS256']

})