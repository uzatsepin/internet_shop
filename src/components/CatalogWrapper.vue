<template>
  <div class="catalog-wrapper">
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: "CatalogWrapper",
    components: {},
    props: {},
    data() {
      return {
        title: 'Main Wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log("Тест")
    }
  }
</script>

<style>
  .catalog-wrapper {
    width: 900px;
    margin: 0 auto;
  }
</style>