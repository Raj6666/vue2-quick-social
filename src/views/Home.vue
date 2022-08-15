<template>
  <div class="wrapper">
    <div class="nav">
      <span class="home">我的</span>
    </div>
    <div class="user-profile">
      <!-- 头像与用户名 -->
      <div class="photo-wrap">
        <div class="photo"></div>
      </div>
      <!-- 简介与功能 -->
      <div class="func-wrap">
        <div class="content-wrap">
          <div class="content">用户名</div>
          <div class="card-btn">编辑资料</div>
        </div>
        <div class="content-wrap">
          <div class="content">XXX到期</div>
          <div class="card-btn">立即续费</div>
        </div>
      </div>
    </div>
    <div class="card-swipe-wrapper">
      <van-swipe @change="onSwipeChange">
        <van-swipe-item class="card-swipe-item">名片名称1</van-swipe-item>
        <van-swipe-item class="card-swipe-item">名片名称2</van-swipe-item>
        <van-swipe-item class="card-swipe-item">名片名称3</van-swipe-item>
        <van-swipe-item class="card-swipe-item">名片名称4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ currentCard + 1 }}/4</div>
        </template>
      </van-swipe>
      <div class="card-swipe-btn-wrap">
        <div class="card-btn" @click="goEdit">编辑名片</div>
        <div class="card-btn">转发名片</div>
      </div>
    </div>
    <div class="search-wrapper">
      <p>我收藏的名片</p>
      <input type="text" class="search-input" placeholder="搜索备注" />
    </div>
    <div class="contact-body">
      <div class="card-list">
        <template v-if="apps.length">
          <a
            class="card-item"
            :class="item.action"
            v-for="item in apps"
            :key="item.action"
            @click="goto(item.action)"
          >
            <div class="content-wrap">
              {{ item.name }}
            </div>
          </a>
        </template>
        <div class="card-empty" v-else>TA还没有名片哟</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'vant';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';
// Vue.use(Swipe);
// Vue.use(SwipeItem);
export default {
  name: 'Home',
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
  },
  data() {
    return {
      tabs: [
        {
          action: 'contact',
          name: '联系方式',
        },
      ],
      apps: [],
      mobile: '',
      currentCard: 1,
    };
  },
  created() {
    const mobile = this.$route.params.mobile;
    if (mobile) {
      this.apps = [
        {
          action: 'wechat',
          name: '名片',
        },
        {
          action: 'wechat2',
          name: '名片2',
        },
        {
          action: 'wechat3',
          name: '名片3',
        },
      ];
      this.mobile = mobile;
    }
  },
  methods: {
    goto(action) {
      alert('go to -> ' + action + ':   ' + this.mobile);
      this.$router.push('Card');
    },
    goEdit() {
      this.$router.push({
        name: 'Card',
        query: {isUpdate: true},
        params: {},
      });
    },
    onSwipeChange(index) {
      this.currentCard = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-common {
  display: flex;
  align-content: center;
  justify-content: flex-start;
}
.wrapper {
  position: relative;
  width: 100%;
  min-height: calc(100vh);
  font-size: 16px;
  font-family: PingFangSC-Regular, sans-serif;
  color: #222222;
  // background: #f4f6f8;
  box-sizing: border-box;
}
// 顶部导航
.nav {
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  height: 4.4rem;
  // background: #f4f6f8;
  // box-shadow: 0 0 3px 0 rgb(0 0 0 / 5%);
}
// 用户信息
.user-profile {
  position: relative;
  display: flex;
  padding: 0 2rem;
  width: 100%;
  height: 6.4rem;
  box-sizing: border-box;
  .photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    .photo {
      border: 5px solid #ffffff;
      border-radius: 50%;
      width: 6.4rem;
      height: 6.4rem;
      background-repeat: no-repeat;
      background-size: contain;
      box-shadow: #e6e8ea 0 10px 20px 5px;
      box-shadow: 0 10px 20px 5px #e6e8ea;
      box-sizing: border-box;
      background-image: url(../assets/images/male_icon.jpg);
    }
  }
  .func-wrap {
    display: flex;
    justify-content: space-between;
    margin-left: .8rem;
    width: 100%;
    .content-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .content {
        font-size: 2rem;
        font-family: PingFangSC, sans-serif;
        font-weight: 400;
        color: rgba(0, 0, 0, .4);
        font-style: normal;
      }
    }
  }
}
// 通用按钮样式
.card-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  padding: 1.2rem 2.4rem;
  width: 9.6rem;
  height: 3.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgba(0, 0, 0, .9);
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  word-break: keep-all;
}
// 名片轮播
.card-swipe {
  &-wrapper {
    position: relative;
    margin-top: 1.2rem;
    padding: 0 1.2rem;
    width: 100%;
    box-sizing: border-box;
  }
  &-item {
    border-radius: 10px;
    padding-top: 5px;
    width: 100%;
    height: 15.4rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    background-image: url(../assets/images/default_header_bg.png);
  }
  &-btn-wrap {
    position: absolute;
    right: 25px;
    bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 23rem;
  }
}
.custom-indicator {
  position: absolute;
  bottom: 5px;
  left: 5px;
  border-radius: 20px;
  padding: 0 .5rem;
  width: 3.7rem;
  height: 2rem;
  color: #ffffff;
  background: rgba(0, 0, 0, .4);
  line-height: 2rem;
}
// 搜索input
.search {
  &-wrapper {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    p {
      font-size: 2rem;
      font-weight: 400;
      color: rgba(0, 0, 0, .4);
      line-height: 2rem;
    }
  }
  &-input {
    margin-left: 4rem;
    border-style: none;
    border-radius: 4px;
    width: 16.8rem;
    height: 2.8rem;
    text-align: center;
    background: #f3f3f3;
  }
}
// 联系内容
.contact-body {
  .card-list {
    padding: 0 1.2rem;
    width: 100%;
    // background: #f4f6f8;
    flex-wrap: wrap;
    box-sizing: border-box;
    @include flex-common();
    .card-item {
      position: relative;
      margin-bottom: 8px;
      border-radius: 8px;
      width: calc(50% - 8px);
      height: 10rem;
      color: #222222;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      box-sizing: border-box;
      background-image: url(../assets/images/default_header_bg.png);
      @include flex-common();
      &:nth-of-type(even) {
        margin-left: 16px;
      }
      .content-wrap {
        padding-top: 1.5rem;
        width: 100%;
        text-align: center;
        color: #ffffff;
        // padding: 14px 16px;
        // width: 100%;
        // background: #ffffff;
        // @include flex-common();
      }
    }
    .card-empty {
      margin-top: 60px;
      width: 100%;
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}
</style>
