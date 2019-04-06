<template>
    <div>
        <comment :newid="id"></comment>
    </div>
</template>

<script>
import comment from '../../subcomponents/Comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>

</style>
