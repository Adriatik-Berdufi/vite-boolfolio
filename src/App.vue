<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import { store } from "./store";

export default{
  data(){
    return{
      store,
     }
  },
  components:{AppHeader,AppFooter,AppMain,},
   
  
};

</script>


<template>
  <div id="app">
    <AppHeader/>
    <div class="container">
      <AppMain/>

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