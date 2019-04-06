<template>
    <div>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <span :class="['mui-control-item', item.id === 0 ? 'mui-active' : '' ]" @tap="getphotoes(item.id)" v-for="item in list " :key="item.id">
                    {{item.title}}
                </span>
            </div>
        </div>
        
        <ul class="photoes-container">
            <router-link tag ="li" v-for="item in photolist" :key="item.id"  :to="'/home/photos/'+item.id">
                <img v-lazy="item.img_url">
                <div class="info">
					<h1 class="info-title">{{ item.title }}</h1>
					<div class="info-content">{{ item.zhaiyao }}</div>
				</div>
            </router-link>
            
        </ul>  	
    </div>
	
</template>

<script>



import mui from '../../../lib/mui/js/mui.js';

// mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
export default {
    data(){
        return{
                list:[],
                photolist:[]
        }
	},
	created () {
        this.gettitle()
        this.getphotoes(0);
	},
	mounted () {
		mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
})
	},
    methods: {
        gettitle(){
			this.$http.get("http://www.liulongbin.top:3005/api/getimgcategory").then(function (data) {
				data.body.message.unshift({title:"全部",id:0})
				this.list = data.body.message
			})
        },
        getphotoes(cateid){
            this.$http.get("http://www.liulongbin.top:3005/api/getimages/"+cateid).then(function (data) {
               
                this.photolist = data.body.message 
           
            })
        }
    }
}

</script>



<style lang="scss" scoped >


.photoes-container{
  
    margin:0;
    padding:10px;
    li{
        background-color: #ccc;
        text-align: center;
        box-shadow: 0 0 7px gray;
        position: relative;
          & + li {
      // 这种样式的写法，适合场景： 排除第一个，应用给其它所有的li
      margin-top: 10px;
    }
        img{
             vertical-align: middle;
            width:100%;
           
        }
         img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }
}
.info {
  position: absolute;
  bottom: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  max-height: 86px;
  overflow: hidden;
  .info-title {
    font-size: 14px;
  }
  .info-content {
    font-size: 13px;
    text-align: left;
    text-indent: 2em;
  }
}

*{
   touch-action: pan-y; 
}
</style>
