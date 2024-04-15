import { createRouter,createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path:'/Projects',
            name:'Projects',
            component: ProjectsPage
        },

    ]

   

});
export {router} ;


