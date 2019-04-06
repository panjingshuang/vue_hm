<template>
    <div class="goodinfo-container">
		<transition 
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		>
		<div class="ball" v-show="flag"></div>
		</transition>
        <!-- 轮播图区域 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :list="list" :isfull="false"></swiper>
					</div>
				</div>
			</div>
        <!-- 购买区 -->
        <div class="mui-card">
				<div class="mui-card-header">{{goodlist.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div >
							<p>
								<span>市场价:￥<del>{{goodlist.market_price}}</del> </span>
								<span class="now_price">&nbsp;&nbsp; 销售价格￥{{goodlist.sell_price}}</span>
							</p>
							<p>
								购买数量:<numbox :max="goodlist.stock_quantity" @func="getcount"></numbox>
							</p>
								
								
							
							<p>
								 <mt-button type="primary"  size="small" >立即购买</mt-button>
								 <mt-button type="danger"  size="small" @click="addToCart" >加入购物车</mt-button>
							</p>
						</div>
					</div>
				</div>
				
			</div>
        <!-- 显示区 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="mui-card-content-inner">
							<p>商品货号：{{goodlist.goods_no}}</p>
							<p>库存情况：{{goodlist.stock_quantity}}件</p>
							<p>上架时间：{{goodlist.add_time|dataFomart}}</p>
						</div>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size="large" plain @click="godesc">图文介绍</mt-button>
          			<mt-button type="danger" size="large" plain @click="gocomment">商品评论</mt-button>
				</div>
			</div>
    </div>
</template>

<script>

import swiper from "../../subcomponents/swiper.vue"
import numbox from "../../subcomponents/Numbox.vue"
import { Toast } from "mint-ui";
// import Numbox from '../../subcomponents/Numbox';
export default {
    data(){
        return {
			id:this.$route.params.id,
			list:[],
			goodlist:{},
			flag:false,
			count:1
		}
		
	},
	created () {
		this.getInfo();
		this.getgoodlist();
	},
    methods: {
        getInfo(){
            this.$http.get("http://www.liulongbin.top:3005/api/getthumimages/"+this.id).then(function (data) {
				if(data.body.status === 0){
					data.body.message.forEach(element => {
						element.img = element.src
					});
					this.list = data.body.message
				}else{
					Toast("图片加载错误")
				}
			})
			
		},
		getgoodlist(){
			this.$http.get("http://www.liulongbin.top:3005/api/goods/getinfo/"+this.id).then(function (data) {
				if (data.body.status === 0) {
				
					this.goodlist = data.body.message[0]
					
				}else{
					Toast("数据加载失败")
				}
			})
		},
		gocomment(){
			this.$router.push({name:"goodcomment", params:{'id':this.id}})
		},
		godesc(){
			this.$router.push({name:"gooddesc", params:{'id':this.id}})
		},
		beforeEnter(el){
			 el.style.transform = "translate(0, 0)";
		},
		enter(el,done){
			  el.offsetWidth;
			   const ballPos = el.getBoundingClientRect();
			// 动态获取徽标的横纵坐标【注意：这里获取徽标的位置，和双向数据绑定没有任何关系，所以，可以直接使用普通的DOM操作】
			// DOM操作的优势：不论要操作的元素属于哪个组件，只要这个元素属于document，那么就能够直接获取到
			const badgePos = document.getElementById("badge").getBoundingClientRect();
			const left = badgePos.left - ballPos.left;
			const top = badgePos.top - ballPos.top;

			// 动态设置 top 和 left 值
				el.style.transform = "translate(" + left + "px, " + top + "px)";
			// 设置小球的过渡效果
			// 贝塞尔曲线在线生成器： http://cubic-bezier.com/#.46,-0.4,1,.49
				el.style.transition = "all .5s cubic-bezier(.46,-0.4,1,.49)";
			// 当入场动画完成之后，需要手动调用一下 done 回调函数，直接跳过小球的出场动画
      		done();
		},
		afterEnter(el){
			  this.flag = !this.flag;
		},
		addToCart() {
					// 点击加入购物车
					this.flag = !this.flag;
					// 调用 mutations 中的 addToCar
					/* this.$store.commit("addToCar", {
						id: this.id,
						count: this.selectedCount
					}); */
					// 直接调用 mapMutaions 中映射出来的方法
				// 	this.addToCar({
				// 		id: this.id,
				// 		count: this.selectedCount,
				// 		selected: true,
				// 		price: this.goodsinfo.sell_price
				//   });
		},
		getcount(count){
			this.count = count
		}
	
	},
	components: {
		swiper,
		numbox
	},
	
}
</script>

<style lang="scss" scoped>
.goodinfo-container{
    background-color: #eee;
 	overflow: hidden;
	 .now_price{
		 color: red;
		 font-size: 13px;
		 font-weight: 30px;

	 }
}
.mui-card-footer{
	display: block;
	
	button{
		margin: 15px 0;
	}
}

.ball{
	width: 15px;
	height: 15px;
	background-color: red;
	border-radius: 50%;
	position: absolute;
	z-index: 99;
	left: 77px;
  	top: 411px;
  // 将来小球要通过动画位移到的位置
  // transform: translate(87px, 250px);
}
</style>
