export default {
  //这个方法做首页城市地址传值给搜索页面表头,用于搜索页面接收掉这个方法
  getAddress(state,v){
    this.state.address = v;

  },
  getAddress2(state,v){
    this.state.address2 = v
  },
  // lishi1(state,v){
  //   this.state.lishi.push(v)
  // }
}
