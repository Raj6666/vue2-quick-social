<template>
  <div class="wrapper">
    <div class="nav">
      <span class="logo"></span>
      <a href="http://d.firim.top/p83x" class="app-qr">下载APP</a>
    </div>
    <div class="new-header">
      <div class="user-profile">
        <!-- 头像 -->
        <div class="photo-wrap">
          <div class="photo">
            <img src="" alt="" />
          </div>
        </div>
        <!-- 名称 -->
        <div class="name">
          <span class="gender-icon man"></span>
          parker
          <span class="empty-icon"></span>
        </div>
      </div>
      <!-- 简介 -->
      <p class="desc">我的名字叫小红，IT工程师</p>
    </div>
    <div class="contact-body">
      <div class="tab-list">
        <div class="tab-item" :class="item.action" v-for="item in tabs" :key="item.action">
          <span class="text">{{ item.name }}</span>
        </div>
      </div>
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
  name: 'Home',
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
  background: #f4f6f8;
  box-sizing: border-box;
}
// 顶部导航
.nav {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  height: 54px;
  background: #f4f6f8;
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
    width: 56px;
    height: 54px;
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
.new-header {
  padding: 10px 20px 5px;
  width: 100%;
  box-sizing: border-box;
  .user-profile {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .name {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top: 10px;
      font-size: 22px;
      font-family: PingFangSC-Medium, sans-serif;
      font-weight: 500;
      line-height: 36px;
      .gender-icon {
        display: inline-block;
        margin: 0 10px 6px 0;
        width: 22px;
        height: 22px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
        &.man {
          background-image: url(data:image/png;base64,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);
        }
        &.woman {
          background-image: url(data:image/png;base64,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);
        }
      }
      .empty-icon {
        display: inline-block;
        margin: 0 0 6px 10px;
        width: 22px;
        height: 22px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  .photo-wrap {
    position: relative;
    align-items: flex-end;
    margin-bottom: 50px;
    border-radius: 16px;
    padding: 20px;
    width: 100%;
    height: 158px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/images/default_header_bg.png);
    box-sizing: border-box;
    .photo {
      position: absolute;
      bottom: -50px;
      left: 50%;
      margin-left: -50px;
      border: 5px solid #ffffff;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      background-size: contain;
      box-shadow: #e6e8ea 0 10px 20px 5px;
      box-shadow: 0 10px 20px 5px #e6e8ea;
      box-sizing: border-box;
      background-image: url(../assets/images/male_icon.jpg);
    }
  }
  .desc {
    margin-top: 4px;
    padding: 0 12px;
    width: 100%;
    font-size: 14px;
    text-align: center;
    color: #aaaaaa;
    box-sizing: border-box;
    line-height: 20px;
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
    background: #f4f6f8;
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
        display: box;
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
