<template>
    <div class="comment-container">
        <span class="comment">发表评论---{{newid}}</span>
       <div class="line">
            <textarea placeholder="请留言（最多120字）"  ></textarea>
        <mt-button type="primary"  size="large">发表评论</mt-button>
        <div class="content" v-for="(item,i) in list" :key="item.add_time">
            <span class="user">第{{i+1}}楼 &nbsp;用户：{{item.user_name}} &nbsp;发表时间：{{item.add_time | dataFomart}}</span><br/>
            <span class="neirong">&nbsp;&nbsp;&nbsp;{{ item.content==="" ? "此用户很懒" :item.content}}</span>
        </div>
       </div>
       <mt-button type="danger"  size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast}  from "mint-ui"
export default {
    data(){
        return {
            pageindex:1,
            list:[]
        }
    },
    created () {
		this.getComment()
	},
    props:['newid'],
    methods:{
        getComment(){
            this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.newid+'?pageindex='+this.pageindex).then(function(data){
                if(data.body.status === 0){
                    if(data.body.message === []){
                        Toast("没有更多评论")
                    }else{
                        this.list = this.list.concat(data.body.message)
                    }
                    
                }else{
                    Toast("评论加载失败")
                }
                
            })
        },
        loadMore(){
            
            this.pageindex ++;
            this.getComment()
          
        }
    }
}
</script>

<style lang="scss" scoped>
    .comment-container{
        padding-top: 10px;
        .comment{
            font-size: 15px;
        }
       .line{
           line-height: 30px;
            textarea{
            font-size: 13px;
            margin: 0;
        }
       .content{
           width: 100%;
            .user{
             width: 500px;
            font-size: 14px;
            background-color:#ddd;
           
        }
        .neirong{
             font-size: 13px;
             text-indent: 2em;
             
        }
       }
       }
    }
</style>
