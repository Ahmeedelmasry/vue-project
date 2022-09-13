<template>
  <div class="the-home text-center">
    <MyNav />
    <div class="the-skills">
      <ul v-for="(skill, index) in skills" :key="index">
        <li>{{ skill }}</li>
        <i @click="deleteIt(index)" class="fa fa-close"></i>
      </ul>
    </div>
    {{ counter }}
    <button @click="increase"></button>
  </div>
</template>

<script>
import MyNav from "@/components/TheNav";

export default {
  name: "TheHome",
  data() {
    return {
      name: "Ahmed",
      isActive: true,
      counter: 0,
      myColor: "red",
      theId: "test",
      skills: ["Html", "Css", "Js", "Bootstrap"],
    };
  },
  components: {
    MyNav,
  },
  methods: {
    deleteIt() {},
    increase() {
      this.counter++;
      localStorage.setItem("counter", this.counter);
    },
  },
  watch: {
    counter() {
      console.log(this.counter);
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>
