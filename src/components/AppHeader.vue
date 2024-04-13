<script>
import { store } from "../store";


export default{
  data(){
    return{
      store,
    }
  },

};



</script>

<template>
<header >
    <div class="container">
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../../public/logoAB.jpeg" alt="">
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        {{ store.author.name.charAt(0).toUpperCase() + store.author.name.slice(1)}}
                    </li>
                    <li>
                        {{ store.author.last_name.charAt(0).toUpperCase() + store.author.last_name.slice(1)}}
                    </li>
                </ul>
            </div>       
        </nav>
    </div>
</header>

</template>

<style lang="scss" scoped>

//import of var and mixins
@use '../scss/partials/variables.scss' as *;
@use '../scss/partials/mixins.scss' as *;
header{
    position: sticky;
    z-index: 1;
    height: $height-header;
    @include center-vertical;
    background-color:$footer-bcg;
    box-shadow: 0px 0px 35px -20px #FFFFFF;
    ul{
        display: flex;
        li{
            padding: 3px 3px;
        }
    }
  
  img{
    max-height: 50px;
    border-radius: 5px;
  }
}
</style>

  
   
    
 

 