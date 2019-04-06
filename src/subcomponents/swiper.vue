<template>
    <div>
      
         <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in list" :key="item.img">
                <a :href="item.url">
                     <img :src="item.img"  :alt="item.img" :class="[ isfull ? 'img-full' : 'img-normal' ]">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

export default {
    props:['list','isfull']
}
</script>

<style lang="scss" scoped>
 .mint-swipe {
     width: 100%;
     height:200px;
     padding: 0;
     text-align: center;
     img{
         height: 200px;
        //  width:377.6px;
        
     }
 }
.img-full {
      // 如果给图片应用了这个类，则图片的宽和高都是撑满父元素的
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

     .img-normal {
      // 如果给图片添加了这个类，则图片的高度 100%， 宽度是 自适应，横向的位置是居中显示
      height: 100%;
    }
</style>
