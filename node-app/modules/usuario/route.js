module.exports = (controller) => {
    const routes = [
        {
            path: '/usuarios',
            method: 'get',
            actions: controller.FIND_ALL
        },
        {
            path: '/usuarios/:id',
            method: 'get',
            actions: controller.FIND_BY_ID
        },
        {
            path: '/usuarios',
            method: 'post',
            actions: controller.INSERT
        },
        {
            path: '/usuarios/:id',
            method: 'put',
            actions: controller.UPDATE
        },
        {
            path: '/usuarios/:id',
            method: 'delete',
            actions: controller.REMOVE
        },
        {
            path: '/usuarios/autenticar',
            method: 'post',
            actions: controller.AUTHENTICATE
        }
    ]

    return routes;
}