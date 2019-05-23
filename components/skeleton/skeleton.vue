<template>
    <div class="skeleton-content">
        <FacebookLoader :uniqueKey="Math.random().toString(36).substring(2)"></FacebookLoader>
        <ContentLoader :uniqueKey="Math.random().toString(36).substring(2)"></ContentLoader>
    </div>
</template>

<script>
import {
    ContentLoader,
    FacebookLoader,
    CodeLoader,
    BulletListLoader,
    InstagramLoader,
    ListLoader
} from 'vue-content-loader'
export default {
    components:{
        ContentLoader,
        FacebookLoader,
        CodeLoader,
        BulletListLoader,
        InstagramLoader,
        ListLoader
    }
}
</script>

<style lang="scss" scoped>
.skeleton-content{
    width: 100%;
    height: 100%;
    padding: 30px;
}
</style>


