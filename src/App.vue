<script>
import axios from 'axios';

export default{
  data(){
    return{
      title:'Portafoglio',
      projects:[],
    }
  },
  created(){
     axios.get('http://127.0.0.1:8000/api/projects').then((response)=>{
      this.projects = response.data.data;
     })

  }
  // components:{
  //  myComponent,
  //}
};

</script>


<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-for="project in projects">
      <ul>
        <li>title : {{ project.title }}</li>
      </ul>
    </div>
    
  </div>
</template>



<style lang="scss">
@use './scss/general.scss' as *;
</style>