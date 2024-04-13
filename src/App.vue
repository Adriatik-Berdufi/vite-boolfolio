<script>
import axios from 'axios';

export default{
  data(){
    return{
      title:'Portafoglio'
    }
  },
  created(){
    console.log(axios);
  }
  // components:{
  //  myComponent,
  //}
};

</script>


<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>



<style lang="scss">
@use './scss/general.scss' as *;
</style>