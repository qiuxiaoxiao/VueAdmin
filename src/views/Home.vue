<template>
  <el-row class="container">
    <el-col :span="4">
      <div class="home_log">ViewAdmin</div>
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i><span>作业详情</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项一</el-menu-item>
            <el-menu-item index="1-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项四</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i><span>I / O 性能</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项一</el-menu-item>
            <el-menu-item index="2-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项四</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-date"></i><span>跑题情况</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项一</el-menu-item>
            <el-menu-item index="3-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">分组四</template>
            <el-menu-item index="3-4-1">选项3-4-1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-tickets"></i><span>作业历史</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="4-1">选项一</el-menu-item>
            <el-menu-item index="4-2">选项二</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="4-4">
            <template slot="title">分组四</template>
            <el-menu-item index="4-4-1">选项4-4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>

    </el-col>

    <el-col :span="20" class="home_content">
      <el-container>
        <el-header>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link home_username">用户名</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-col>
  </el-row>
</template>


<script>

</script>

<style scoped>
  .container{
    position: absolute;
    width: 100%;
    bottom: 0;
    top:0;
  }

  .home_content {
    height: 100%;
    background-color: #f4f4f4;
  }
  .el-header, .el-footer {
    color: #333;
    line-height: 60px;
  }
  .el-header{
    position: relative;
    top:0;
    background: #20a0ff;
    text-align: right;
  }
  .el-footer{
    position: relative;
    bottom: 0;
    background-color: #B3C0D1;
  }
  .el-main {
    top:60px;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .home_log{
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
    border-right: 1px solid #eeeeee;
  }
  .home_username{
    color: #ffffff;
    cursor: pointer;
  }
</style>
