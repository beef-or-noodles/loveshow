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
            component: () => import(/* webpackChunkName:"index" */ '../pages/index'),
            meta: {title: TITLE + '首页'}
        }]
    },
    {
        path: '/woker_detail/:id',
        component: () => import(/* webpackChunkName:"shopdetail_worker" */  '../pages/shopdetail/worker'),
        meta: {title: TITLE + '作品详情'}
    },
    {
        path: '/role_detail/:id',
        component: () => import(/* webpackChunkName:"woker_detail" */  '../pages/shopdetail/worker'),
        meta: {title: TITLE + '资料详情'}
    },
    {
        path: '/myworke/:id',
        component: () => import(/* webpackChunkName:"myworke" */  '../pages/myinfo/myworke'),
        meta: {title: TITLE + '拍客主页'}
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName:"404" */  '../pages/404')
    },
    {path: '*', redirect: '/404'}// 防输错或者没找到页面路由错误，跳转到首页
]
export default routes
