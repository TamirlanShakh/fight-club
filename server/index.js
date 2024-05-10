const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const totalCountMiddleware = require('./total-count-middleware');

server.use(middlewares);
server.use(totalCountMiddleware);

server.use(jsonServer.router('db.json'));

server.listen(3001, () => {
    console.log('JSON Server is running');
});

module.exports = function (req, res, next) {
    console.log('Request URL:', req.url);
    console.log('Request method:', req.method);

    if (req.method === 'GET' && req.url.includes('_page')) {
        const resource = req.url.split('?')[0].split('/').pop();
        const db = req.app.locals.db;
        const total = db[resource].length;
        res.set('X-Total-Count', total);
        console.log('X-Total-Count:', total);
    }

    next();
};
