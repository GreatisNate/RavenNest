import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        }, {
            path: '/customization',
            name: 'customization',
            component: () => import('./views/Customization.vue'),
        }, {
            path: '/docs',
            name: 'docs',
            component: () => import('./views/Documentation.vue'),
        }, {
            path: '/highscore',
            name: 'highscore',
            component: () => import('./views/HighScore.vue'),
        }, {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
        }, {
            path: '/logout',
            name: 'logout',
            component: () => import('./views/Logout.vue'),
        }, {
            path: '/password',
            name: 'password',
            component: () => import('./views/Password.vue'),
        }, {
            path: '/password-recovery',
            name: 'password-recovery',
            component: () => import('./views/PasswordRecovery.vue'),
        },],
});
//# sourceMappingURL=router.js.map