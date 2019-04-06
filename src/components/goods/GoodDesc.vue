
<template>
    <div class="desc-conatiner">
        <p class="title">{{info.title}}</p>
        <hr>
        <div class="content" v-html=" info.content">
           
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:{}
        }
    },
    created(){
        this.getdesc()
    },
    methods:{
        getdesc(){
            this.$http.get("http://www.liulongbin.top:3005/api/goods/getdesc/87").then(function(data){
              console.log(data)
              if(data.body.status === 0){
                    this.info = data.body.message[0]
                    console.log(data);
                    
                }else{
                    Toast("数据加载失败")
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
.desc-conatiner{
    padding:4px ;
    .title{
        color: #26a2ff;
        text-align: center;
        font-size: 15px;
        margin: 15px 0;
    }
    .content {
       img {
               width: 100%;
        }
    
  }
}
 

</style>
