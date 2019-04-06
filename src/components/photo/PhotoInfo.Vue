<template>
        <div class="photo-container">
            <h1 >{{photo.title}}</h1>
            <div class="subtitle">
                <span>发表时间：{{photo.add_time|dataFomart}}</span>
                <span>点击：{{photo.click}}次</span>
            </div>
            <hr>
            <!-- 缩略图片 -->
     <div class="thumb-img-list">
      <!-- 使用 v-for 循环渲染缩略图 -->
      <!-- <img class="preview-img" v-for="(item, index) in thbums" :src="item.src" height="100" @click="$preview.open(index, photolist)" :key="index"> -->
        <vue-preview :slides="thbums"></vue-preview>
    </div>
            <!-- content -->
            <div class="content" v-html="photo.content">
            </div>
            <!-- 评论区 -->
            <comment :newid="id"></comment>
        </div>
</template>

<script>
import comment from "../../subcomponents/Comment.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,
            photo:{},
            thbums:[]

        }
    },
    methods: {
         getInfo(){
            this.$http.get("http://www.liulongbin.top:3005/api/getimageInfo/"+this.id).then(function (data) {
              
                this.photo = data.body.message[0]
            })
        },
        gettumbs(){
            this.$http.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then(function (data) {
               console.log(data);
                data.body.message.forEach(element => {
                   element.h = 600;
                   element.w = 400;
                   element.msrc = element.src
               });
               this.thbums = data.body.message
                
            })
        }
    },
    created () {
       this.getInfo();
       this.gettumbs();
    },
    components: {
        comment
    }
}
</script>

<style lang="scss" scoped>
.photo-container{
    padding: 0 12px;
    h1{
        font-size: 15px;
        color: #26a2ff;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        
    }
    .content{
        font-size: 14px;
    }
    .thumb-img-list {
  img {
    margin: 10px;
    box-shadow: 0 0 7px gray;
  }
}
}
</style>
