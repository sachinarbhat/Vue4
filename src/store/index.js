/*eslint-disable*/
import { createStore } from "vuex";
import { Content } from "./content";

const store = createStore({
    state () {
      return {
        info:"Welcome",

        loading: true
      }
    },
    getters:{
        getloading(state){
            return state.loading
        }
    },
    mutations:{
         setloading(state,payload){
          state.loading= payload
         }
    },
    
    modules:{
      Content 
    }
  })

  export default store