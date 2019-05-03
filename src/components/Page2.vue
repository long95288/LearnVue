<template>
    <div id="Page2">
        这是page2的内容
        <el-button id="btn" v-on:click="back()">点我+1</el-button>
        <el-button v-on:click="clickbtn()">点我-1</el-button>
        <p>数值:{{ number }}</p>
        <i>计算属性时间:{{now}}</i>
        <el-button v-on:click="backpage()">返回World页面</el-button>
        <el-button v-on:click="backpage1()">返回上一个页面</el-button>
        <router-link to="Page2inner">page2的嵌套</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
name: 'Page2',
data (){
    return {
      number: 1  
    }
},
watch:{
    number:()=>{ //对数据numer进行监听
        // 貌似会发生死循环
        alert("数据发生变化")
        // this.number +1;
    }
},
methods: { // 方法属性
    back(e){ // 设置了按钮的点击监听事件
        // alert("你点击了我")
        this.number+=1;
        console.log(this.number);
    },
    clickbtn(){
        // alert("计算属性");
       this.number-=1;
    },
    backpage(){
        // 获得全局路由
        this.$router.push('World')
    },
    backpage1(){
        this.$router.back() // 返回一步
    }
},
computed: { // 计算属性
    // clickbtn:()=>{
    //     alert("计算属性")
    // }
    now:()=>{
        return Date.now()
    }
}

}
</script>
<style>

</style>

