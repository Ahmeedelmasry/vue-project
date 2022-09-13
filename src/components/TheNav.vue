<template>
  <div class="the-nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/the-test">Test Page</router-link></li>
      <li><router-link to="/the-test/ahmed">Dynamic</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNav",
};
</script>

<style scoped lang="scss"></style>
