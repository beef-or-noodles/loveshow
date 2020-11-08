/**
 * Created by HIAPAD on 2020/5/7.
 */
/* 注册模块 */
const TITLE = '爱拍秀-'
const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import(/* webpackChunkName:"index" */ '../pages/layout'),
        children: [{
            path: 'home',
            component: () => import(/* webpackChunkName:"index" */ '../pages/home/index'),
            meta: {title: TITLE + '首页'}
        },
        {
            path: 'hall',
            component: () => import(/* webpackChunkName:"hall" */ '../pages/home/hall'),
            meta: {title: TITLE + '大厅'}
        },
        {
            path: 'user_order',
            component: () => import(/* webpackChunkName:"user_order" */  '../pages/order/userOrder'),
            meta: {title: TITLE + '拍客订单'}
        },
        {
            path: 'shop_order',
            component: () => import(/* webpackChunkName:"shop_order" */  '../pages/order/shopOrder'),
            meta: {title: TITLE + '商家订单'}
        },
        {
            path: 'my',
            component: () => import(/* webpackChunkName:"my" */  '../pages/myinfo/my'),
            meta: {title: TITLE + '我的'}
        },]
    },
    {
        path: '/woker_detail/:id',
        component: () => import(/* webpackChunkName:"shopdetail_worker" */  '../pages/shopdetail/worker'),
        meta: {title: TITLE + '作品详情'}
    },
    {
        path: '/collent',
        component: () => import(/* webpackChunkName:"collent" */  '../pages/myinfo/collent'),
        meta: {title: TITLE + '我的收藏'}
    },
    {
        path: '/role_detail/:id',
        component: () => import(/* webpackChunkName:"woker_detail" */  '../pages/shopdetail/worker'),
        meta: {title: TITLE + '资料详情'}
    },
    {
        path: '/notice_detail/:id',
        component: () => import(/* webpackChunkName:"notice_detail" */  '../pages/shopdetail/notice'),
        meta: {title: TITLE + '通告详情'}
    },
    {
        path: '/myworke/:id',
        component: () => import(/* webpackChunkName:"myworke" */  '../pages/myinfo/myworke'),
        meta: {title: TITLE + '拍客主页'}
    },
    {
        path: '/coupons',
        component: () => import(/* webpackChunkName:"coupons" */  '../pages/myinfo/coupons'),
        meta: {title: TITLE + '优惠卷'}
    },
    {
        path: '/message',
        component: () => import(/* webpackChunkName:"message" */  '../pages/myinfo/message'),
        meta: {title: TITLE + '我的消息'}
    },
    {
        path: '/userinfo',
        component: () => import(/* webpackChunkName:"userinfo" */  '../pages/myinfo/userinfo'),
        meta: {title: TITLE + '个人资料'}
    },
    {
        path: '/address_list',
        component: () => import(/* webpackChunkName:"address_list" */  '../pages/myinfo/address/list'),
        meta: {title: TITLE + '地址列表'}
    },
    {
        path: '/address_add',
        component: () => import(/* webpackChunkName:"address_add" */  '../pages/myinfo/address/add'),
        meta: {title: TITLE + '新增地址'}
    },
    {
        path: '/address_edit',
        component: () => import(/* webpackChunkName:"address_add" */  '../pages/myinfo/address/add'),
        meta: {title: TITLE + '编辑地址'}
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName:"404" */  '../pages/404')
    },
    {path: '*', redirect: '/404'}// 防输错或者没找到页面路由错误，跳转到首页
]
export default routes
