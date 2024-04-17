<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
        store,
        project: null,
        loading: true,
    };
  },
  props: {},
  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;
      axios.get(store.api.baseUrl + `projects/${projectId}`).then((response) => {
        this.project = response.data;
        this.loading = false;

      });
    },
  },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <div v-if="project" class="text-center mt-5">
    <h1 class="mb-5">{{ project.title }}</h1>
      <span><strong class="m-2">Author: {{ project.author }}</strong></span>
      <p>
          <strong class="me-2">Tecnologie utilizzate: </strong>
          <span
            v-for="tech in project.technologies"
            class="badge me-2"
            :style="'background-color:' + tech.color"
            >{{ tech.label }}
          </span>
      </p>
      <p>
          <strong class="me-2">Categoria: </strong>
          <span
            class="badge"
            :style="'background-color:' + project.category.color">
            {{ project.category.label }}
          </span>
      </p>
      <div><a :href="project.project_link" class="btn btn-primary">Guarda la repository Git</a></div>
      <h2 class="mt-5"><strong class="m-2">Description</strong></h2>
      <p class="text-center mt-2">{{ project.description }}</p> 
      
  </div>
  <div v-else class="d-flex justify-content-center align-items-center" style="height: 80vh;">
    <h2 class="h-5">Loading...</h2>
  </div>
        

  
</template>

<style lang="scss" scoped>
</style>