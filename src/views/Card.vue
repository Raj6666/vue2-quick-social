<template>
  <div class="wrapper">
    <div class="nav">
      <span class="logo"></span>
      <!-- <a href="http://d.firim.top/p83x" class="app-qr">下载APP</a> -->
    </div>
    <div class="user-profile">
      <!-- 头像与用户名 -->
      <div class="photo-wrap">
        <div class="photo">
          <img src="" alt="" />
        </div>
        <div class="name">parker</div>
      </div>
      <!-- 简介与功能 -->
      <div class="func-wrap">
        <div class="desc-wrap">
          <div class="desc">自我介绍</div>
        </div>
        <div class="btn-wrap">
          <div class="card-btn">收藏名片</div>
          <div class="card-btn">转发名片</div>
        </div>
      </div>
    </div>
    <div class="contact-body">
      <!-- <div class="tab-list">
        <div class="tab-item" :class="item.action" v-for="item in tabs" :key="item.action">
          <span class="text">{{ item.name }}</span>
        </div>
      </div> -->
      <div class="app-list">
        <template v-if="apps.length">
          <a
            class="app-item"
            :class="item.action"
            v-for="item in apps"
            :key="item.action"
            @click="goto(item.action)"
          >
            <div class="content-wrap">
              <div class="img-wrap" :class="item.action"></div>
              <p class="app-name">{{ item.name }}</p>
            </div>
          </a>
        </template>
        <div class="app-empty" v-else>TA还没有联系方式哟</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {},
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
    };
  },
  created() {
    const mobile = this.$route.params.mobile;
    if (mobile) {
      this.apps = [
        {
          action: 'wechat',
          name: '微信',
        },
        {
          action: 'wechat',
          name: '微信',
        },
        {
          action: 'wechat',
          name: '微信',
        },
      ];
      this.mobile = mobile;
    }
  },
  methods: {
    goto(action) {
      alert('go to -> ' + action + ':   ' + this.mobile);
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
  background: #ffffff;
  box-sizing: border-box;
}
// 顶部导航
.nav {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  height: 4.4rem;
  // background: #f4f6f8;
  box-shadow: 0 0 3px 0 rgb(0 0 0 / 5%);
  .logo {
    display: inline-block;
    margin-top: 8px;
    width: 90px;
    height: 30px;
    background: url(../assets/images/logo.png) no-repeat;
    background-size: contain;
  }
  .app-qr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.6rem;
    height: 4.4rem;
    font-size: 10px;
    text-decoration: unset;
    color: #222222;
    flex-direction: column;
    &::before {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURUxpcSIiItNHNFcAAAABdFJOUwBA5thmAAAAPklEQVQoz2NgoB2o//+/8f//f2Sx6hjkG38ASXqzKHEzpWH1Q76BLBbQ9Q3sD+rIZSFMIZEFdAHUFNJZtAIAjPa7vaz9+egAAAAASUVORK5CYII=)
        no-repeat;
      background-position: 50%;
      background-size: 24px;
      content: '';
    }
  }
}
// 用户信息
.user-profile {
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding: 1rem;
  width: 100%;
  height: 16rem;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/images/default_header_bg.png);
  box-sizing: border-box;
  .photo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    .photo {
      border: 5px solid #ffffff;
      border-radius: 50%;
      width: 9.6rem;
      height: 9.6rem;
      background-repeat: no-repeat;
      background-size: contain;
      box-shadow: #e6e8ea 0 10px 20px 5px;
      box-shadow: 0 10px 20px 5px #e6e8ea;
      box-sizing: border-box;
      background-image: url(../assets/images/male_icon.jpg);
    }
    .name {
      margin-top: 1.6rem;
      font-size: 2rem;
      font-family: PingFangSC, sans-serif;
      font-weight: 400;
      color: #ffffff;
      font-style: normal;
    }
  }
  .func-wrap {
    width: 25rem;
    .desc-wrap {
      padding: .8rem 1.6rem;
      width: 100%;
      height: 9.6rem;
      background-color: #ffffff;
      box-sizing: border-box;
    }
    .desc {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      font-size: 1.6rem;
      color: rgba(0, 0, 0, .4);
      background: #f3f3f3;
    }
    .btn-wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
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
    }
  }
}
// 联系内容
.contact-body {
  .tab-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
    .tab-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border-radius: 17px;
      padding: 0 12px;
      height: 35px;
      font-size: 14px;
      background: #ffffff;
      line-height: 20px;
      &::before {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        content: '';
      }
      .text {
        margin-left: 6px;
      }
      &.contact {
        &::before {
          background-image: url(data:image/png;base64,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);
        }
      }
    }
  }
  .app-list {
    padding: 12px;
    width: 100%;
    // background: #f4f6f8;
    flex-wrap: wrap;
    box-sizing: border-box;
    @include flex-common();
    .app-item {
      position: relative;
      padding: 8px;
      width: 50%;
      color: #222222;
      box-sizing: border-box;
      @include flex-common();
      .content-wrap {
        border: 1px solid #b9bfc4;
        border-radius: 17px;
        padding: 14px 16px;
        width: 100%;
        background: #ffffff;
        @include flex-common();
      }
      .img-wrap {
        margin-right: 10px;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        &.wechat {
          background: url(../assets/images/wechat_icon.png) no-repeat;
          background-size: contain;
        }
      }
      .app-name {
        display: flex;
        overflow: hidden;
        width: 100%;
        font-size: 13px;
        font-family: PingFang SC, sans-serif;
        font-weight: 500;
        text-align: left;
        text-overflow: ellipsis;
        line-height: 20px;
        word-break: break-all;
        -webkit-line-clamp: 2;
      }
    }
    .app-empty {
      margin-top: 60px;
      width: 100%;
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}
</style>
