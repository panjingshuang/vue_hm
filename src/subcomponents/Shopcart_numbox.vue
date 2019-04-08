<template>
  <div class="mui-numbox" data-numbox-min='1'  >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="this.$store.getters.countObj[id]" ref="nobox" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
// 导入 mui 从而支持 初始化 数字框
import mui from "../../lib/mui/js/mui.min";

export default {
  data() {
    return {
      
    };
  },
  mounted() {
    mui(".mui-numbox").numbox();
   mui(".mui-numbox").numbox().setOption('step',1)
  },
  methods: {
    countChanged() {
  
      const val = parseInt(this.$refs.nobox.value)
      this.$store.commit('updateCart',{id:this.id,count:val})
    }
  },
  props: ['id'], 
 
};
</script>

<style lang="scss" scoped>

</style>
