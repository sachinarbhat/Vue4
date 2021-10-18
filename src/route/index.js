import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home/Home.vue'

const routes= [
    {
        path: "/:pathMatch(.*)*",
        name: "home",
        component: Home,
      },
      {
            path:'/',
            redirect:'/home'
      },
    {
        path:'/home',
        name:'home',
        component:Home,
    },
    {
        path:'/detailpage/?:id',
        name: 'detailpage',
        component:()=>import(/* webpackChunckName:"Detailpage" */ '@/components/view/Contentdetails.vue')
    },
    {
        path:'/myfav',
        name:'myfav',
        component:()=>import(/* webpackChunckName:"MyFavourites" */ '@/components/home/Favourite.vue')
    }
];

 const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router