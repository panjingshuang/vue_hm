<template>
    <div>
        
        <swiper :list = "list" :isfull="true"></swiper>
          <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/news">
		                    <img src="../../images/menu1.png"  alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photos">
		                     <img src="../../images/menu2.png"  alt="">
		                     <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goods">
		                        <img src="../../images/menu3.png"  alt="">
		                        <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                        <img src="../../images/menu4.png"  alt="">
		                        <div class="mui-media-body">留言反馈</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                        <img src="../../images/menu5.png"  alt="">
		                        <div class="mui-media-body">视频专区</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                       <img src="../../images/menu6.png"  alt="">
		                       <div class="mui-media-body">联系我们</div>
                        </router-link>      
                    </li>
		           
		           
		        </ul> 


                
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import swiper from "../../subcomponents/swiper.vue"
    export default({
        data(){
           return {
                list:[]
           }
        },
        created () {
            this.getLunbo()
        },
        methods: {
            getLunbo(){
               this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result =>{
                  if(result.body.status == 0){
                      this.list = result.body.message;
                       
                  }else{
                      Toast('数据加载失败')
                  }
                       
                })
            }
        },
        components: {
            swiper
        }
    })
</script>

<style lang='scss' scoped>

 .mui-grid-view.mui-grid-9{
     background-color: #fff;
     img{
           width: 60px;
           height: 60px;
       }
   
 }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-bottom: 0;
        border-right:0;
       
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
 
 
 

</style>
