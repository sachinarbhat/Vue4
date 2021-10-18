<template>
    <div class="main">
    <button class="backbtn" @click="this.$router.back()">Go Back</button>
    <div class="image">
    <h1>{{contentdetails.name}}</h1>
    <img :src="contentdetails && contentdetails.image && contentdetails.image.medium">
    </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                    contentdetails:""
            };
        },
        created() {
            this.contentdetails=this.$route.params.details ? JSON.parse(this.$route.params.details):null

        }
    }
</script>

<style scoped>
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