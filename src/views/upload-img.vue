<template>
  <div class="img-upload">
    <!-- 头像上传 -->
    <el-card class="box-card">
      <div slot="header">
        <span style="line-height: 36px;">头像上传</span>
      </div>
      <div class="text item">
        <k-img-btn></k-img-btn>
      </div>
    </el-card>
    
    <!-- 身份证上传 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">身份证上传</span>
      </div>
      <div class="text item">
        <k-img-btn type="card"></k-img-btn>
      </div>
    </el-card>

    <!-- 上传列表 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">上传列表</span>
      </div>
      <div class="text item">
        <k-img-btn type="cell" :disable="true"></k-img-btn>
      </div>
    </el-card>
    
  </div>
</template>

<script>
import { Card } from 'element-ui';
import KImgUpload from '../components/image-upload/index.js';
export default {
  name: 'img-temp',
  components: {
    [Card.name]: Card,
    [KImgUpload.name]: KImgUpload
  }
};
</script>

<style lang="scss">
  .img-upload {
    margin: 0 auto;
  }
  .img-upload .el-card {
    box-shadow: none;
    &:hover {
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
  }
  .box-card {
    width: 480px;
    margin: 15px auto;
  }
  .item {
    padding: 18px 0;
  }
  .text {
    font-size: 14px;
  }
</style>
