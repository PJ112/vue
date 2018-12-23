export default {
  //类似computed，对state数据进行一些操作
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
