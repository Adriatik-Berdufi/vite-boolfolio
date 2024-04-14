import { reactive }  from 'vue';

export const store = reactive({
    //header
   author:{
            name:'adriatik',
            last_name:'berdufi',
        },   
    api:{
        baseUrl:'http://127.0.0.1:8000/api/',
    },
    projects:[],

});