import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
Vue.use(Vuex)
//mutations专门用来修改state中的数据 但是外界也是可以修改state中的数据的 这样对于数据维护特别不好
//解决方法
const isDev = process.env.NODE_ENV === 'development'
export default () =>{
  return new Vuex.Store({
    strict: isDev,  //在组件中修改state数据就会出现warnning
    state: defaultState,
    mutations,
    getters,
    actions
  })
}
