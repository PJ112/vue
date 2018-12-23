export default {
  updataCountAsync (store,data) {
    setTimeout(()=>{
      store.commit('updataCount',{
        num:data.num
      })
    },data.time)
  }
}
