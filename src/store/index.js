/*eslint-disable*/
import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        info:"Welcome",
        favList:[],
        contentList:[],
        loading: true
      }
    },
    getters:{
        getContentList(state){
          return state.contentlist.filter(ele=> {if(ele && ele.image && ele.image.medium){return ele}})
        },
        getFavList(state){
            return state.favList
        },
        getloading(state){
            return state.loading
        }
    },
    mutations:{
         setFavList(state,payload){
             state.favList =payload
         },
         setloading(state,payload){
          state.loading= payload
         },
         setContentList(state,payload){
           state.contentlist= payload
         }
    },
    actions:{
        actInfo(context){
          context.commit('setloading',true)
            return new Promise((resolve,reject)=>{
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                  };
                  
                  fetch("http://localhost:3000/data", requestOptions)
                    .then(response => response.json())
                    .then(result =>{ 
                    if(result._embedded)
                    { resolve(result)
                      setTimeout(()=>
                      {context.commit('setloading',false);
                        
                      },1000);
                      } 
                    else {context.commit('setloading',false); reject("Data not found!")} })
                    .catch(error =>{ context.commit('setloading',false); reject("Data not found!")} );
            })
        }
    }
  })

  export default store