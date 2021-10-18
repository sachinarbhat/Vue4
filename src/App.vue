<template>
  <div class="container">
    <div v-if="loading" class="load-container">
      <div class="loader">
        <img src="@/assets/spin.gif" style="width:60%;" />
      </div>
    </div>
    <div v-else class="main">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
// import Home from './components/home/Home.vue';
import { mapActions,mapMutations,mapGetters} from "vuex";
export default {
  name: "App",
  data() {
    return {
      checkedData: [],
    };
  },
  components: {
    //   Home
  },
  computed: {
    ...mapGetters(['getloading']),
    loading() {
      return this.getloading
    }
  },
  methods: {
    ...mapActions(['actInfo']),
    ...mapMutations(['setContentList'])
  },
  created() {
    this.errMsg = ""
    this.actInfo().then((res) => {
      this.setContentList(res._embedded.episodes)
    }).catch(err => {
      this.err = err;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  box-sizing: border-box;
}
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.loader {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  position: fixed;
}
.load-container {
  width: 100%;
  height: 100%;
  background-color: bisque;
  position: fixed;
}
.main {
  margin: 25px;
}
</style>
