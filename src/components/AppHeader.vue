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
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <router-link :to="{name:'home'}" class="navbar-brand">
                    <img src="../../public/logoAB.jpeg" alt="">
                </router-link >
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link  :to="{name:'home'}" class="nav-link active" aria-current="page" >Home</router-link >
                        <router-link :to="{name:'projects'}" Projects class="nav-link">Projects</router-link >
                    </div>
                </div>
                 
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

  
   
    
 

 