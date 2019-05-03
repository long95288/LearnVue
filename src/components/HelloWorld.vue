<template>
  <div class="inner">
    <h3>这是Hello World 文件的内容</h3>
    <div>
      <ul>
      <li><router-link to="Page1">Page1</router-link></li>
      <li><router-link to="Page2">Page2</router-link></li>
      </ul>
    </div>
    <!-- 内嵌路由 -->
    <div class="inner">
      <h3>内嵌路由显示的地方</h3>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<style>
.inner{
  background-color: palegreen;
}

</style>
