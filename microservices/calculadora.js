const cote = require('cote');

const responder = new cote.Responder({ name: 'calc'});
const publisher = new cote.Publisher({
    name: 'LOGGER',
    broadcasts: ['logger'],
})
responder.on('soma', (req, cb) => {
    const values = req.values || [];
    const total = values.reduce((soma, atual) => soma+= atual, 0);
    publisher.publish('logger', {values, action: 'soma', result: total});
    cb({result: total});
})