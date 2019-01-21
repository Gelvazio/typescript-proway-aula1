const cote = require('cote');

const subscriber = new cote.Subscriber({
    name: 'LOGGER',
    subscribesTo: ['logger'],
});


subscriber.on('logger', (req) => {
    console.log('LOG =>', req);
})