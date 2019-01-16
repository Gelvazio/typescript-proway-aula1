module.exports = (controller) => {
    const routes = [
        {
            path: '/contas',
            method: 'get',
            actions: controller.FIND_ALL
        },
        {
            path: '/contas/:id',
            method: 'get',
            actions: controller.FIND_BY_ID
        },
        {
            path: '/contas',
            method: 'post',
            actions: controller.INSERT
        },
        {
            path: '/contas/:id',
            method: 'put',
            actions: controller.UPDATE
        },
        {
            path: '/contas/:id',
            method: 'delete',
            actions: controller.REMOVE
        }
    ]

    return routes;
}