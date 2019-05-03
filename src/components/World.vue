<template>
    <div id="World">
        <h3>这是World.vue的内容用于设置同级路由</h3>
        <div>
            <!-- 默认路由渲染视图 -->
            <router-view ></router-view>
        </div>
        <div>
            <!-- 名称为A路由渲染视图 -->
            <router-view name="A"></router-view>
        </div>
        <div>
            <!-- 名称为B的路由渲染视图 -->
            <router-view name="B"></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>

</style>

