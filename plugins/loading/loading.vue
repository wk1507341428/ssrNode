<template>
    <div v-show="show" class="my-loading">
        <img v-if="type==1" src="./timg1.gif">
        <img v-else src="./timg.gif">
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            type: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.my-loading{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    img{
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        width: px2rem(400);
    }
}
</style>