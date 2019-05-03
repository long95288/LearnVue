<template>
    <div id="Page1inner">
        这是Page1inner的内容,在这个页面中将使用饿了么组件并
        使用内嵌组件
        <el-button>按钮</el-button>
        <i class="el-icon-edit"></i>
        <mycomponent></mycomponent>
        <mycomponent2></mycomponent2>
    </div>
</template>

<script>
// 引入其他的组件
import mycomponent from './mycomponent.vue'
import mycomponent2 from './mycomponent2.vue'

export default {
components:{
     mycomponent,mycomponent2
 }
}
</script>
<style>
</style>


