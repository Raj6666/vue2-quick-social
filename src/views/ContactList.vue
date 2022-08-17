<template>
  <div class="wrapper">
    <div class="nav">
      <van-icon name="arrow-left" class="back-icon" />
      <span class="title">添加联系方式</span>
    </div>
    <div class="contact-list">
      <div class="contact-item" v-for="item in 10" :key="item">
        <div class="contact-item-icon"></div>
        <p class="contact-item-name">支付宝{{ item }}</p>
        <div class="contact-item-btn">添加</div>
      </div>
    </div>
  </div>
</template>

<script>
// Vue.use(Swipe);
// Vue.use(SwipeItem);
export default {
  name: 'ContactList',
  components: {},
  data() {
    return {
      contacts: [],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh);
  background: #f4f6f8;
}
// 顶部导航
.nav {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 4.4rem;
  line-height: 4.4rem;
  font-size: 2rem;
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.contact-list {
  margin-top: 1.2rem;
  padding: 0 1.2rem;
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: .6rem;
    border-radius: 12px;
    padding: 0 2rem;
    width: 100%;
    height: 6.4rem;
    background-color: #ffffff;
    box-sizing: border-box;
    &-icon {
      border-radius: 10px;
      width: 4.4rem;
      height: 4.4rem;
      background-color: lightgreen;
    }
    &-name {
      margin-left: 1rem;
      font-size: 1.4rem;
      font-weight: bolder;
      text-align: left;
      flex: 1;
    }
    &-btn {
      border-radius: 16px;
      width: 5.4rem;
      height: 2.2rem;
      text-align: center;
      color: #ffffff;
      background-color: #000000;
      line-height: 2.2rem;
    }
  }
}
</style>
