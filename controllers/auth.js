
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
        jwksUri: process.env.AUTH0_CLIENT
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_DOMAIN,
    algorithms: ['RS256']

})