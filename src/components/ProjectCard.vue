<script>

export default{

    props:{ project : Object},
};

</script>
<template>
   <div class="col">
    <div class="card" style="width: 24rem;">
      <img :src="project.image || 'https://picsum.photos/600/400'" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <div>
          <span class="me-2 "><strong>Category:</strong></span>
          <span
            class="badge"
            :style="'background-color:' + project.category.color">
            {{ project.category.label }}
          </span>
        </div>
        <div>
          <span class="me-2"><strong>Technologies:</strong></span>
          <span
            v-for="tech in project.technologies"
            class="badge m-2"
            :style="'background-color:' + tech.color"
            >{{ tech.label }}
          </span>
        </div>
        <p class="card-text">{{ project.description }}</p>
        <div class="d-flex gap-3">
          <a :href="project.project_link" class="btn btn-primary">Guarda la repository Git</a>
          <router-link :to="{ name: 'DetailPage', params: { id: project.id } }" class="btn btn-secondary">See More..</router-link>
        </div>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>

</style>