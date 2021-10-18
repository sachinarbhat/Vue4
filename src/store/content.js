/*eslint-disable*/
export const Content={
    state: () => ({
        favList:[],
        contentList:[],
     }),
    mutations: {
        setContentList(state,payload){
            state.contentlist= payload
          },
          setFavList(state,payload){
            state.favList =payload
        }
      },
    actions: { 
        actInfo(context){
            context.commit('setloading',true,{root:true})
              return new Promise((resolve,reject)=>{
                  var requestOptions = {
                      method: 'GET',
                      redirect: 'follow'
                    };
                    
                    fetch("https://raw.githubusercontent.com/sachinarbhat/sachinarbhat.github.io/data/bigbang.json", requestOptions)
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
     },
    getters: {  
        getContentList(state){
            return state.contentlist.filter(ele=> {if(ele && ele.image && ele.image.medium){return ele}})
          },
          getFavList(state){
              return state.favList
          },
    }
}