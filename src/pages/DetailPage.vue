<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
        store,
        project: null,
    };
  },
  props: {},
  methods: {
    fetchProject() {
      const projectId = this.$route.params.id;
      axios.get(store.api.baseUrl + `projects/${projectId}`).then((response) => {
        this.project = response.data;
        
      });
    },
  },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  
    <h1 class="text-center mt-5">{{ project.title }}</h1>
  
</template>

<style lang="scss" scoped>
</style>