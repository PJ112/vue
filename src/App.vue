<template>
  <div id="app">
    {{count}}
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'App',
  mounted () {
    console.log(this.$store)
    this.updataCountAsync({
      num: 5,
      time:2000
    })
    // let i =1;
    // this.$store.state.count = 3
    // setInterval( () =>{
    //   this.updataCount({
    //     num: i++,
    //     num2:2
    //   })
    // },1000)
  },
  methods: {
    ...mapActions(['updataCountAsync']),
    ...mapMutations(['updataCount'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
  }
}
</script>

<style>
</style>
