<template>  
    <div class="shopcar-container">
        <!-- 购物车的列表 -->
        <div class="mui-card" v-for="item in goodlist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getSelected[item.id]" @change="getSelectedChange(item.id,$store.getters.getSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" >
                        <div  class="info">
                            <h1>{{item.title}}</h1>
                            <span>￥{{item.sell_price}}</span>
                            <numbox :id="item.id"></numbox>
                            <a href="#" @click.prevent="del(item.id)">删除</a>
                        </div>
					</div>
				</div>
			</div>

        <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="left-container">
                            <p>总计(不含运费)</p>
                            <p>以勾选商品<span>{{$store.getters.getAmountAndcount.count}}</span>件,
                            总价<span>￥{{$store.getters.getAmountAndcount.amount}}</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
            <p>{{this.$store.getters.getSelected}}</p>
    </div>
</template>

<script>
import numbox from "../../subcomponents/Shopcart_numbox.vue";
export default {
  
  data () {
  	return {
          goodlist:[],
        
  	}
  },
 mounted () {
   
 },
 created () {
     this.getinfo()
 },
  methods:{
        getinfo(){
        var ids = this.$store.getters.idstr
        if(ids.length <= 0) return 
          
         this.$http.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+ids).then(function (data) {
          if(data.body.status === 0){
              this.goodlist = data.body.message
          }
             
         });
     },
     del(id){
         this.goodlist.some((element,i) => {
             if(element.id === id){
                  this.goodlist.splice(i, 1);
                  return true
             }
         }); 
         this.$store.commit('delCart',id)
     },
     getSelectedChange(id,val){
         console.log(id+"-------------"+val);
     }
  },
  components: {
      numbox
  }
}


</script>











<style lang="scss" scoped>
.shopcar-container{
    align-items: center;
    background-color: #eee;
    overflow: hidden;
    .mui-card-content-inner{
        display: flex;
        justify-content: space-around;
       align-items: center;
        h1{
            font-size: 13px;
            margin-bottom: 10 px;
        }
        span{
            color: red;
            font-weight: bold;
        }
        .mui-numbox{
            width: 110px;
            height: 26px;
        }
    }
    img{
        width: 60px;
        height: 60px;
        
    }
}

</style>
