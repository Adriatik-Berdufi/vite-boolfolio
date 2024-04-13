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
    <footer>
        <div class="container">
            <div class="footer-menu">
                <div class="socilas">
                    <span><a href="#"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a></span>
                    <span><a href="#"><font-awesome-icon :icon="['fab', 'square-github']" /></a></span>
                    <span><a href="#"><font-awesome-icon :icon="['fab', 'facebook']"/></a></span>
                    <span><a href="#"><font-awesome-icon :icon="['fab', 'instagram']"/></a></span>
                </div>
                <div>All Rights Reserved :2024</div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
//import of var and mixins
@use '../scss/partials/variables.scss' as *;
@use '../scss/partials/mixins.scss' as *;


footer{
    color:$green-color;
    background-color: $footer-bcg;
    height: $height-footer;
    padding-top: 25px;
    .footer-menu{
        text-align: center;   
    }
    .socilas{
        span{
            font-size: 28px;
            margin-right: 20px;
            cursor: pointer;
            a{
                list-style: none;
                color: $green-color;
                &:hover{
                    color: $gren-color;
                }
            }
            
        }   
    }
}


</style>