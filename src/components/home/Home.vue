<template>
<div class="container">
  <div style="text-align: right;">
    <button class="favbtn" @click="this.$router.push({name: 'myfav' })">My Favourite</button>
  </div>
  <div v-if="errMsg">{{ errMsg }}</div>
  <div v-else>
    <h1 style="margin-bottom: 20px;">Season Listing</h1>
    <div class="container-main">
      <div class="container-section" v-for="(seasonData, index) in groupbySeason" :key="index">
        <h2>Season {{ seasonData[index].season }}</h2>
        <EpisodeDesc :episodeLists="seasonData"></EpisodeDesc>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import data from "@/data.json";
import EpisodeDesc from "./EpisodeDesc.vue";
export default {
  components: { EpisodeDesc },
  name: "home",
  data() {
    return {
      episodeLists: [],
      errMsg: ""
    };
  },
  computed: {
    groupbySeason() {
      let list = {};
      this.$store.getters.getContentList.forEach((ele) => {
        if (Object.keys(list).includes(ele.season.toString())) {
          list[ele.season] = [...list[ele.season], ele];
        } else {
          list[ele.season] = [ele];
        }
      });
      console.log({ list });
      return list;
    },
  },
  created() {
    this.errMsg = ""
    // this.$store.dispatch('actInfo').then(res => {
    //   console.log('res', res)
    // }).catch(err => {
    //   this.errMsg = err
    // })
    // // this.episodeLists = data && data._embedded && data._embedded.episodes;
    console.log(this.episodeLists);
  },

  methods: {},
};
</script>

<style scoped>
.favbtn {
  background-color:  #f74343;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin-right: 0;
  border-radius: 30px;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
}



.favbtn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>