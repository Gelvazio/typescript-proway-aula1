const routes = []
    .concat(
        require('./modules/usuario').route
    )
    .concat(
        require('./modules/categoria').route
    )
    .concat(
        require('./modules/conta').route
    )
module.exports = (app) => {
    routes.forEach(route => {
        app[route.method](route.path, route.actions);
    });
}