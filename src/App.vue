<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 路由加载的地方 -->
    <div>
      <ul>
        <router-link :to="{name:'Hello2'}" tag="li" >Hello</router-link>
        <li><router-link to="World">World</router-link></li>
      </ul>
    </div>
    <div class="mainframe">
      这是最外层的页面
      <div>
        这是默认路由显示的位置
       <router-view class="defaultview"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainframe{
  background-color: aquamarine;
}
.defaultview{
  background-color:bisque;
  height: 500px;
}
.firstview{
  background-color: peru;
  height: 500px;
}
.secondview{
  background-color: blueviolet;
  height: 500px;
}

</style>
