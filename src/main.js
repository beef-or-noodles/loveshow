import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)
import 'amfe-flexible'

import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
});

import './assets/iconfont/iconfont.css'

import store from './store/index'
Vue.config.productionTip = false
const router = new Router({ routes })

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 根据路由设置标题// 路由发生改变修改页面的title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    window.scrollTo(0, 0); // 跳转到新页面 页面滚动到顶部；
    next();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
