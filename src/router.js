import { createRouter,createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import DetailPage from "./pages/DetailPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path:'/projects',
            name:'projects',
            component: ProjectsPage
        }, 
        {
            path:'/projects/:id',
            name:'DetailPage',
            component: DetailPage
        },


    ]

   

});
export {router} ;


