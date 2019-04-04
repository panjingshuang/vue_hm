<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id" >
					<router-link :to="'/home/news/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.zhaiyao}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time|dataFomart}} </span>
                                <span>点击次数:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>

<script>
 import {Toast}  from "mint-ui"
export default {
    data () {
		return {
			list:[]
		}
	},
	created () {
		this.getNews()
	},
	methods: {
		getNews(){
			this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(function (data) {
			
			if(data.body.status === 0){
				this.list = data.body.message
			}else{
				Toast("数据加载失败")
			}
				
				
			})
		}
	}
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
		padding: 0;
		margin: 0;
        li{
            h1{
                font-size:14px;
            }
            .mui-ellipsis{
                color:#26a2ff;
                 display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
</style>
