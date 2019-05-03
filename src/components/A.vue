<template>
    <div id="A">
        这是A的内容
        <router-link to="C">A中嵌套C</router-link>
        <router-link to="D">A中嵌套D</router-link>
        <div class="Adiv">
        <router-view name="Aview"></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#A{
    border: solid 2px;
    border-color:green;
}
.Adiv{
    background-color: aqua;
}
</style>
