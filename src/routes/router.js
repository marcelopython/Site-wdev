import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Videos from '@/pages/Videos';
import About from '@/pages/Sobre';
import Contacts from '@/pages/Contato'


Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/videos',
        component: Videos
    },
    {
        path:'/sobre',
        component:About
    },
    {
        path:'/contato',
        component:Contacts
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;