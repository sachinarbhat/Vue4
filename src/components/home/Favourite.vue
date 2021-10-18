<template>
    <div class="row">
    <button class="backbtn" @click="this.$router.back()">Go Back</button>
        <h1>My Favourite Lists</h1>
        <div class="column" v-for="(episode, index) in favourite" :key="index">
            <div class="card">
                <img :src="episodeImage(episode)" alt="images" style="width: 100%" />
                <p class="info" style="font-weight:700">Episode {{ episode.number }}</p>
                <p class="info" style="font-weight:500;color:#372768">{{ episode.name }}</p>
                <div class="desc info" v-html="episode.summary"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'favourite',
    computed: {
        favourite() {
            return this.$store.getters.getFavList
        }
    },
    methods: {
        episodeImage(episode) {
            return episode && episode.image && episode.image.medium;
        },
    },
}
</script>

<style scoped>
.column {
    float: left;
    width: 20%;
    padding: 0 10px;
    margin-bottom: 20px;
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
    background-color: #ffe6e6;
}
.info {
  margin: 2px;
  font-size: 14px;
}
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
}
img{
    border-radius: 5px;
}
.backbtn{
  background-color: #cccccc; 
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius:20px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}


.backbtn:hover {
background-color: black;
  color: white;
}

</style>