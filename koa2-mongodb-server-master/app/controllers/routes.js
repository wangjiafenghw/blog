'use strict'
const database = [{
        id: '1',
        icon: 'dashboard',
        name: 'Dashboard',
        zhName: '仪表盘',
        route: '/dashboard'
    },
    {
        id: '2',
        breadcrumbParentId: '1',
        name: 'Users',
        zhName: '用户管理',
        icon: 'user',
        route: '/user'
    },
    {
        id: '7',
        breadcrumbParentId: '1',
        name: 'Posts',
        zhName: '文章管理',
        icon: 'shopping-cart',
        route: '/post'
    },
    {
        id: '21',
        menuParentId: '-1',
        breadcrumbParentId: '2',
        name: 'User Detail',
        zhName: '用户详情',
        route: '/user/:id'
    },
    {
        id: '3',
        breadcrumbParentId: '1',
        name: 'Request',
        zhName: 'Request',
        icon: 'api',
        route: '/request'
    },
    {
        id: '4',
        breadcrumbParentId: '1',
        name: 'UI Element',
        zhName: 'UI组件',
        icon: 'camera-o'
    },
    {
        id: '45',
        breadcrumbParentId: '4',
        menuParentId: '4',
        name: 'Editor',
        zhName: 'Editor',
        icon: 'edit',
        route: '/UIElement/editor'
    },
    {
        id: '5',
        breadcrumbParentId: '1',
        name: 'Charts',
        zhName: 'Charts',
        icon: 'code-o'
    },
    {
        id: '51',
        breadcrumbParentId: '5',
        menuParentId: '5',
        name: 'ECharts',
        zhName: 'ECharts',
        icon: 'line-chart',
        route: '/chart/ECharts'
    },
    {
        id: '52',
        breadcrumbParentId: '5',
        menuParentId: '5',
        name: 'HighCharts',
        zhName: 'HighCharts',
        icon: 'bar-chart',
        route: '/chart/highCharts'
    },
    {
        id: '53',
        breadcrumbParentId: '5',
        menuParentId: '5',
        name: 'Rechartst',
        zhName: 'Rechartst',
        icon: 'area-chart',
        route: '/chart/Recharts'
    },
    {
        id: '8',
        breadcrumbParentId: '1',
        name: 'Cloud',
        zhName: '云盘',
        icon: 'cloud'
    },
    {
        id: '81',
        breadcrumbParentId: '8',
        menuParentId: '8',
        name: 'Upload',
        zhName: '上传',
        icon: 'upload',
        route: '/Cloud/Upload'
    },
    {
        id: '82',
        breadcrumbParentId: '8',
        menuParentId: '8',
        name: 'List',
        zhName: '列表',
        icon: 'bars',
        route: '/Cloud/List'
    },
    {
        id: '83',
        breadcrumbParentId: '8',
        menuParentId: '8',
        name: 'View',
        zhName: '视图',
        icon: 'desktop',
        route: '/Cloud/View'
    }
    
]

import { getRouters, initRouters } from "../dbhelper/routersHelper"

exports.routes = async (ctx, next) => {
    // ctx.body = database
    let data = await getRouters();
    ctx.body = data
}

exports.initRouters = async (ctx) => {
    let data = await initRouters(database)
    ctx.body = data
}