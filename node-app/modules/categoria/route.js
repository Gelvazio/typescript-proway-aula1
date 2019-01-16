module.exports = (controller) => {
    const routes = [
        {
            path: '/categorias',
            method: 'get',
            actions: controller.FIND_ALL
        },
        {
            path: '/categorias/:id',
            method: 'get',
            actions: controller.FIND_BY_ID
        },
        {
            path: '/categorias',
            method: 'post',
            actions: controller.INSERT
        },
        {
            path: '/categorias/:id',
            method: 'put',
            actions: controller.UPDATE
        },
        {
            path: '/categorias/:id',
            method: 'delete',
            actions: controller.REMOVE
        }
    ]

    return routes;
}