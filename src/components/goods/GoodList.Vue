<template>
    <div class="goods-container">
        <router-link class="good-item" v-for="item in goodlist" :key="item.id" :to="'/home/goods/'+item.id" > 
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>

         <mt-button type="danger"  size="large" plain @click="loadMore">加载更多</mt-button>
        


        
    </div>    
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            pageindex:1,
            goodlist:[]
        }
    },
    created () {
      this.getgoods()  
    },
    methods: {
        getgoods(){
            this.$http.get("http://www.liulongbin.top:3005/api/getgoods?pageindex="+this.pageindex).then(function (data) {
             
                if(data.body.status === 0){
                   this.goodlist = this.goodlist.concat(data.body.message)
                }else{
                   Toast("数据加载失败")
                }
                
            })
        },
         loadMore(){
            this.pageindex ++;
            this.getgoods()
          
        },
       
    }
}
</script>

<style lang="scss" scoped>
    .goods-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        padding-top: 0;
        .good-item{
            width: 49%;
            border: 1px solid #ccc;
            margin-top: 7px;
            box-shadow: 0 0 7px #ccc;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
           img{
            width: 100%;
            min-height: 170px;
           } 
           h1{
               font-size: 14px;
           }
           .info
           {

                background-color: #eee;
                overflow: hidden;
                p {
                    margin: 3px;
                }
               .price{
                   .old{
                    text-decoration: line-through;
                    font-size: 12px;
                   }
                   .new{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                    margin-right: 10px;
                   }
               }
               .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px; 
               }
           }
        }
    }
</style>
