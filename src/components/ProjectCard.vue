<script>

export default{

    props:{ project : Object},
};

</script>
<template>
    <div class="col">
        
        <div class="card" style="width: 24rem;">
            <img :src="project.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a :href="project.project_link" class="btn btn-primary">Guarda la reposity Git</a>
            </div>
        </div> 
    </div>
    
</template>



<style lang="scss" scoped>

</style>