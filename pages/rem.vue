<template>
    <div class="container">
        <div class="box"></div>
        <lessonformless></lessonformless>
    </div>
</template>

<script>
import lessonformless from 'lesson-form'
export default {
    data(){
        return{

        }
    },
    components:{
        lessonformless
    }
}
</script>

<style lang="scss">
.container{
    padding: 20px;
}
.box{
    width: 100px;
    height: 100px;
    background-color: $color;
}
</style>

