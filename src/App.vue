<template>
  <div :class="getTheme()">
    <b-container fluid>
      <Navbar />
      <SectionIntro />
      <SectionAbout />
      <SectionExp />
      <SectionTools />
      <SectionProjects />
    </b-container>
  </div>
</template>

<script>
import '@/assets/style.css';

import Navbar from './components/Navbar/Navbar.vue';
import SectionIntro from './components/Content/Section.Introduction.vue';
import SectionAbout from './components/Content/Section.About.vue';
import SectionExp from './components/Content/Section.Experience.vue'
import SectionTools from './components/Content/Section.Tools.vue'
import SectionProjects from './components/Content/Section.Projects.vue';

export default {
  components: {
    Navbar,
    SectionIntro,
    SectionAbout,
    SectionExp,
    SectionTools,
    SectionProjects,
  },
  methods: {
    getTheme() {
      console.log(this.darkMode);
      return this.darkMode ? "dark-theme" : "light-theme";
    }
  },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode;
      }
    }
  }
}
</script>

<style scoped>
.dark-theme {
  background-color: black;
  color: white;
  transition: background-color 0.5s, color 0.5s;
}

.light-theme {
  background-color:white;
  color: black;
  transition: background-color 0.5s, color 0.5s;
}
</style>