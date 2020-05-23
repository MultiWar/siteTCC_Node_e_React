const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, resp, next) => {
    const authHeader = req.headers.authorization;
    const url = req.url;
    if(!authHeader) {
        if(url == '/conta' || url == '/editarConta') {
            return resp.json({status: "Não autorizado"});
        }
        else {
            return next();
        }
    }

    const parts = authHeader.split(' ');
    
    if(!parts.length === 2) {
        if(url == '/conta' || url == '/editarConta') {
            return resp.json({status: "Não autorizado"});
        }
        else {
            return next();
        }
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        if(url == '/conta' || url == '/editarConta') {
            return resp.json({status: "Não autorizado"});
        }
        else {
            return next();
        }
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err && (url == '/conta'|| url == '/editarConta')) {
            return resp.json({status: "Não autorizado"});
        }
        req.userId = decoded.id;
        return next();
    })
}