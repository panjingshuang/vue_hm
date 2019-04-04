<template>
    <div class="newsInfo-container">
        <h3 class="title">{{info.title}}</h3>
        <p class="info">
            <span>发表时间:{{info.add_time|dataFomart}}</span>
            <span>点击:{{info.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="info.content"></div>
        <Comment :newid="this.id"></Comment>
    </div>
</template>
<script>
import Comment from "../../subcomponents/Comment.vue";
export default {
    data () {
        return {
            id:this.$router.currentRoute.params.id,
            info:{}
        }
    },
    created () {
       this.getInfo()
    },
    methods: {

    getInfo(){
        this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(function (data) {
          
            if(data.body.status === 0){
                this.info  = data.body.message[0]
            }
            
        })
    }
    },
    components: {
        Comment
    }
   
}
</script>
<style lang="scss" scoped>
.newsInfo-container{
    padding: 0 4px;
    .title{
        font-size: 15px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    .info{
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
    }
    
}
</style>
