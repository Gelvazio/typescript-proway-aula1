const routes = []
    .concat(
        require('./usuario').route
    )
module.exports = (app) => {
    routes.forEach(route => {
        app[route.method](route.path, route.actions);
    });
}