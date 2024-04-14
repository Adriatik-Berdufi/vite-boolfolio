<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from "../store";

export default{
  data(){
    return{
        store,
    }
  },
  created(){
     axios.get(store.api.baseUrl + 'projects').then((response)=>{
      store.projects = response.data.data;
     })

  },
  components:{ProjectCard,},
   
  
};

</script>
<template>
    <div class="row row-col-3 g-3 mt-5">
        <h1>Projects</h1>
            <ProjectCard v-for="project in store.projects" :project="project"/>
        </div>
    
</template>

<style lang="scss" scoped>

</style>
