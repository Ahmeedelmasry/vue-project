<template>
  <div class="the-dynamic">
    <h1 class="text-center">{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    //     if (this.$route.params.id == "ahmed") {
    //       console.log("Yes");
    //     } else {
    //       console.log("No");
    //     }
    console.log(this.$route.params);
  },
};
</script>

<style></style>
