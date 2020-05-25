<template>
  <div class="homePageIndex">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px">
        <!-- 滚动条组件 vue-scroll -->
        <vue-scroll :ops="ops">
          <el-menu background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
            <!-- 循环遍历渲染左侧导航 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第一年(2013)</span>
              </template>
              <el-menu-item index="1-1">一月</el-menu-item>
              <el-menu-item index="1-2">二月</el-menu-item>
              <el-menu-item index="1-3">三月</el-menu-item>
              <el-menu-item index="1-4">四月</el-menu-item>
              <el-menu-item index="1-5">五月</el-menu-item>
              <el-menu-item index="1-6">六月</el-menu-item>
              <el-menu-item index="1-7">七月</el-menu-item>
              <el-menu-item index="1-8">八月</el-menu-item>
              <el-menu-item index="1-9">九月</el-menu-item>
              <el-menu-item index="1-10">十月</el-menu-item>
              <el-menu-item index="1-11">十一月</el-menu-item>
              <el-submenu index="1-12">
                <template slot="title">十二月</template>
                <el-menu-item index="1-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第二年(2014)</span>
              </template>
              <el-menu-item index="2-1">一月</el-menu-item>
              <el-menu-item index="2-2">二月</el-menu-item>
              <el-menu-item index="2-3">三月</el-menu-item>
              <el-menu-item index="2-4">四月</el-menu-item>
              <el-menu-item index="2-5">五月</el-menu-item>
              <el-menu-item index="2-6">六月</el-menu-item>
              <el-menu-item index="2-7">七月</el-menu-item>
              <el-menu-item index="2-8">八月</el-menu-item>
              <el-menu-item index="2-9">九月</el-menu-item>
              <el-menu-item index="2-10">十月</el-menu-item>
              <el-menu-item index="2-11">十一月</el-menu-item>
              <el-submenu index="2-12">
                <template slot="title">十二月</template>
                <el-menu-item index="2-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第三年(2015)</span>
              </template>
              <el-menu-item index="3-1">一月</el-menu-item>
              <el-menu-item index="3-2">二月</el-menu-item>
              <el-menu-item index="3-3">三月</el-menu-item>
              <el-menu-item index="3-4">四月</el-menu-item>
              <el-menu-item index="3-5">五月</el-menu-item>
              <el-menu-item index="3-6">六月</el-menu-item>
              <el-menu-item index="3-7">七月</el-menu-item>
              <el-menu-item index="3-8">八月</el-menu-item>
              <el-menu-item index="3-9">九月</el-menu-item>
              <el-menu-item index="3-10">十月</el-menu-item>
              <el-menu-item index="3-11">十一月</el-menu-item>
              <el-submenu index="3-12">
                <template slot="title">十二月</template>
                <el-menu-item index="3-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第四年(2016)</span>
              </template>
              <el-menu-item index="4-1">一月</el-menu-item>
              <el-menu-item index="4-2">二月</el-menu-item>
              <el-menu-item index="4-3">三月</el-menu-item>
              <el-menu-item index="4-4">四月</el-menu-item>
              <el-menu-item index="4-5">五月</el-menu-item>
              <el-menu-item index="4-6">六月</el-menu-item>
              <el-menu-item index="4-7">七月</el-menu-item>
              <el-menu-item index="4-8">八月</el-menu-item>
              <el-menu-item index="4-9">九月</el-menu-item>
              <el-menu-item index="4-10">十月</el-menu-item>
              <el-menu-item index="4-11">十一月</el-menu-item>
              <el-submenu index="4-12">
                <template slot="title">十二月</template>
                <el-menu-item index="4-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第五年(2017)</span>
              </template>
              <el-menu-item index="5-1">一月</el-menu-item>
              <el-menu-item index="5-2">二月</el-menu-item>
              <el-menu-item index="5-3">三月</el-menu-item>
              <el-menu-item index="5-4">四月</el-menu-item>
              <el-menu-item index="5-5">五月</el-menu-item>
              <el-menu-item index="5-6">六月</el-menu-item>
              <el-menu-item index="5-7">七月</el-menu-item>
              <el-menu-item index="5-8">八月</el-menu-item>
              <el-menu-item index="5-9">九月</el-menu-item>
              <el-menu-item index="5-10">十月</el-menu-item>
              <el-menu-item index="5-11">十一月</el-menu-item>
              <el-submenu index="5-12">
                <template slot="title">十二月</template>
                <el-menu-item index="5-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第六年(2018)</span>
              </template>
              <el-menu-item index="6-1">一月</el-menu-item>
              <el-menu-item index="6-2">二月</el-menu-item>
              <el-menu-item index="6-3">三月</el-menu-item>
              <el-menu-item index="6-4">四月</el-menu-item>
              <el-menu-item index="6-5">五月</el-menu-item>
              <el-menu-item index="6-6">六月</el-menu-item>
              <el-menu-item index="6-7">七月</el-menu-item>
              <el-menu-item index="6-8">八月</el-menu-item>
              <el-menu-item index="6-9">九月</el-menu-item>
              <el-menu-item index="6-10">十月</el-menu-item>
              <el-menu-item index="6-11">十一月</el-menu-item>
              <el-submenu index="6-12">
                <template slot="title">十二月</template>
                <el-menu-item index="6-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="7">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第七年(2019)</span>
              </template>
              <el-menu-item index="7-1">一月</el-menu-item>
              <el-menu-item index="7-2">二月</el-menu-item>
              <el-menu-item index="7-3">三月</el-menu-item>
              <el-menu-item index="7-4">四月</el-menu-item>
              <el-menu-item index="7-5">五月</el-menu-item>
              <el-menu-item index="7-6">六月</el-menu-item>
              <el-menu-item index="7-7">七月</el-menu-item>
              <el-menu-item index="7-8">八月</el-menu-item>
              <el-menu-item index="7-9">九月</el-menu-item>
              <el-menu-item index="7-10">十月</el-menu-item>
              <el-menu-item index="7-11">十一月</el-menu-item>
              <el-submenu index="7-12">
                <template slot="title">十二月</template>
                <el-menu-item index="7-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="8">
              <template slot="title">
                <i class="icon iconfont iconnianfen"></i>
                <span class="oneLevel">第八年(2020)</span>
              </template>
              <el-menu-item index="8-1">一月</el-menu-item>
              <el-menu-item index="8-2">二月</el-menu-item>
              <el-menu-item index="8-3">三月</el-menu-item>
              <el-menu-item index="8-4">四月</el-menu-item>
              <el-menu-item index="8-5">五月</el-menu-item>
              <el-menu-item index="8-6">六月</el-menu-item>
              <el-menu-item index="8-7">七月</el-menu-item>
              <el-menu-item index="8-8">八月</el-menu-item>
              <el-menu-item index="8-9">九月</el-menu-item>
              <el-menu-item index="8-10">十月</el-menu-item>
              <el-menu-item index="8-11">十一月</el-menu-item>
              <el-submenu index="8-12">
                <template slot="title">十二月</template>
                <el-menu-item index="8-12-1">十二月一日</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </vue-scroll>
      </el-aside>
      <!-- 中间内容 -->
      <el-container>
        <!-- 头部 -->
        <el-header height="100px">
          <span class="block">
            <el-avatar :size="70" :src="headImageUrl"></el-avatar>
          </span>
          <el-dropdown>
            <div class="custom-user-name">
              <span>张珂</span>
            </div>
            <!-- 悬停展示下菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>切换账号</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <div class="custom-breadcrumb-navigation">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <el-form class="weatherSearch">
              <el-row>
                <el-col :span="8" :offset="7">
                  <el-form-item>
                    <el-input v-model="weatherSearchContent" placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <el-button type="primary" plain @click="searchCityWeather">搜索</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <vue-scroll :ops="ops">
            <div class="custom-main-content">
              <div class="weather">
                <el-card class="box-card" v-for="monthNumber in 2" :key="monthNumber">
                  <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
                </el-card>
              </div>
              <div class="monthList">
                <el-card class="box-card" v-for="monthNumber in 12" :key="monthNumber">
                  <div class="monthNm">{{monthNumber+'月'}}</div>
                  <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
                </el-card>
              </div>
            </div>
          </vue-scroll>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "homePageIndex",
  data() {
    return {
      headImageUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", //头像图片地址
      ops: {
        //滚动条组件绑定的值
        vuescroll: {},
        scrollPanel: {},
        rail: {
          background: "#01a99a",
          opacity: 0,
          size: "4px",
          specifyBorderRadius: false,
          gutterOfEnds: null, //轨道距 x 和 y 轴两端的距离
          gutterOfSide: "0", //距离容器的距离
          keepShow: false, //是否即使 bar 不存在的情况下也保持显示
          border: "none" //边框
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#C0C4CC"
        }
      },
      weatherSearchContent: "" //天气搜索框绑定的内容
    };
  },
  methods: {
    searchCityWeather() {
      alert(this.weatherSearchContent);
    }
  }
};
</script>

<style scoped lang="scss">
// 头部样式
.el-header {
  background-color: #409eff;
  color: white;
  line-height: 100px;
  text-align: right;
  padding-right: 60px;
  font-size: 16px;
  .el-dropdown {
    .custom-user-name.el-dropdown-selfdefine {
      font-size: 16px;
      color: white;
    }
  }
  .block {
    display: inline-block;
    .el-avatar.el-avatar--circle {
      vertical-align: middle;
    }
  }
}
// 左边菜单样式
.el-aside {
  color: white;
  border-right: 1px solid #e6e6e6;
  background: #409eff;
  overflow-x: hidden;
  max-height: 902px;
  .el-menu {
    border-right: 0;
    .el-submenu {
      .el-submenu__title {
        .oneLevel {
          margin-left: 10px;
        }
      }
    }
  }
}
//中间主体样式
.el-main {
  .custom-breadcrumb-navigation {
    .el-breadcrumb{
      padding-bottom: 15px;
    }
    .weatherSearch{
      border-top: solid 1px #ebeef5;
      .el-row{
        .el-col{
          .el-form-item{
            margin-top: 22px;
          }
        }
      }
    }
  }
  .custom-main-content {
    max-height: 670px;
    border-top: solid 1px #ebeef5;
    .monthList,
    .weather {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .box-card {
        width: 24%;
        margin-top: 15px;
        height: 170px;
        /deep/ .el-card__body {
          padding: 2px;
          .monthNm {
            text-align: center;
            font-size: 30px;
          }
        }
      }
    }
    .weather {
      justify-content: space-around;
    }
  }
}
</style>
