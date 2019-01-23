const moment = require('moment-timezone');
const jwt = require('jwt-simple');

const gerarToken = (usuario) => {
    if(usuario) {
        let expires = moment.add(30, 'minutes').validOf();
        let { nome, email, status } = usuario;
        let token = jwt.encode( { iss: usuario, exp: expires }, 'codigosecreto');
        return {
            token: token,
            usuario: { nome, email, status }
        }
    } else {
        throw new Error('Usuário não informado.');
    }
}

const getTokenInfo = (token) => {
    const info = {};
    token = token || "";
    let bearer = token.split(" ");
    tokenField = bearer.length > 1 ? bearer[1] : null;
    let decoded = tokenField && jwt.decode(tokenField, 'codigosecreto');
    if(!token) {
        info.status = 'indefinido';
    } else if(!tokenField || !decoded || !decoded.exp || !decoded.iss) {
        info.status = 'invalido';
    } else if(decode.exp <= moment()) {
        info.status = 'expirado';
    } else {
        info.status = 'valido';
        info.token = tokenField;
        info.usuario = decoded.iss;
    }
    return info;
}

const validarToken = (token) => {
    let resultado = getTokenInfo(token);
    return resultado;
}

const getUsuario = (token) => {
    let {usuario} = getTokenInfo(token);
    return usuario;
}

module.exports = {
    gerarToken,
    validarToken,
    getUsuario
}