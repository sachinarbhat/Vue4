<template>
  <div class="row">
    <div class="column" v-for="(episode, index) in episodeLists" :key="index">
      <!-- <router-link :to="{name:'detailpage',params:{id:episode.id,details:JSON.stringify(episode)}}"> -->
      <div class="card">
        <div class="favstar" :added="checkAdded(episode)" @click="addtofav(episode)">
          <Star :added="checkAdded(episode)" />
        </div>
        <div class="content" @click="getcontent(episode)">
          <img :src="episodeImage(episode)" alt="images" style="width: 100%;cursor: pointer;" />
          <p class="info" style="font-weight:700">Episode {{ episode.number }}</p>
          <p class="info" style="font-weight:500;color:#372768">{{ episode.name }}</p>
          <div class="desc info" v-html="episode.summary"></div>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../../svg/star.vue";
export default {
  components: { Star },
  data() {
    return {};
  },

  props: {
    episodeLists: {
      type: Object,
      default: null,
    },
  },
  methods: {
    episodeImage(episode) {
      return episode && episode.image && episode.image.medium;
    },
    addtofav(episode) {
      let finalarr = []
      if (this.checkAdded(episode)) {
        finalarr = this.$store.getters.getFavList.filter(ele => {
          if (ele.id != episode.id) {
            return ele
          }
        });
      }
      else {
        finalarr = [...this.$store.getters.getFavList, episode];
      }


      this.$store.commit('setFavList', finalarr)
    },
    getcontent(episode) {
      this.$router.push({ name: 'detailpage', params: { id: episode.id, details: JSON.stringify(episode) } })
    },
    checkAdded(episode) {
      let status = this.$store.getters.getFavList.some(ele => (ele.id === episode.id))
      return status
    }
  },
};
</script>

<style scoped>
.column {
    float: left;
    width: 20%;
    padding: 0 20px;
    margin-bottom: 30px;
}

.row {
    margin: 0 -5px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

@media screen and (max-width: 600px) {
    .column {
        width: 100%;
        display: block;
        margin-bottom: 20px;
    }
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    height: 280px;
    overflow: hidden;
    background-color: #e0e0eb;
}
.info {
  margin: 2px;
  font-size: 14px;
}
p {
  margin: 0px;
}
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
}

.favstar {
  text-align: end;
  cursor: pointer;
}
</style>