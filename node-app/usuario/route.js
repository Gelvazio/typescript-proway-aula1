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
        }
    ]

    return routes;
}