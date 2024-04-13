<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

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

  },
  components:{AppHeader,AppFooter,},
   
  
};

</script>


<template>
  <div id="app">
    <AppHeader/>
    <div class="container">
    
        
    </div>
    <AppFooter/>
  </div>
</template>



<style lang="scss" scoped>
//import of var and mixins
@use './scss/partials/variables.scss' as *;
@use './scss/partials/mixins.scss' as *;
.container {
  overflow: scroll;
  height: calc(100vh - $height-footer - $height-header); 
}
</style>