//专门用来修改state中的数据 且只接收两个参数
export default  {
  updataCount (state, {num, num2}) {
    console.log(num2)
    state.count = num
  }
}
