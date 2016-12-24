<template>
  <div class="k-img-upload-panel">
    <div class="k-img-upload-panel__wrapper" :class="wrapperClass">
      <div class="k-upload-panel__content">
        <div class="k-upload-panel__pre-show abs-lt" :style="styles"></div>
      </div>
      <input class="k-upload-panel__file-input full-layer abs-lt" type="file" accept="image/png,image/jpeg,image/jpg" @change="editPic">
    </div>
  </div>
</template>
<script>
  import { getFileUrl } from './util.js';
  export default {
    name: 'k-img-btn',
    data () {
      return {
        blobImg: null,
        imgFile: null
      };
    },
    props: {
      img: null,
      type: {
        type: String,
        default: 'cell',
        validator (value) {
          switch (value) {
            case 'cell':
              return true;
            case 'card':
              return true;
            default:
              return false;
          }
        }
      }
    },
    computed: {
      preImg () {
        return this.blobImg ? this.blobImg : this.img;
      },
      styles () {
        if (this.preImg) {
          return {
            backgroundImage: `url(${this.preImg})`,
            backgroundColor: 'rgb(255, 255, 255)'
          };
        }
      },
      wrapperClass () {
        let tpl = 'cell';
        switch (this.type) {
          case 'cell':
            tpl = 'cell';
            break;
          case 'card':
            tpl = 'card';
            break;
          default:
            tpl = 'cell';
            break;
        }
        return `k-img-upload-panel__wrapper-${tpl}`;
      }
    },
    methods: {
      editPic (e) {
        this.blobImg = getFileUrl(e.target);
        this.imgFile = e.target.files.item(0) ? e.target.files.item(0) : null;
        this.$emit('file-upload', {imgPre: this.blobImg, imgFile: this.imgFile});
      }
    }
  };
</script>
<style>
  .k-img-upload-panel .k-img-upload-panel__wrapper-cell{
    display: inline-block;
    position: relative;
    background-color: #fff;
    width: 81px;
  }
  .k-img-upload-panel .k-img-upload-panel__wrapper-card{
    border: 2px solid #359df5;
    border-radius: 3px;
    position: relative;
    background-color: #fff;
    width: 65%;
    padding: 20px 0 10px 0;
    margin-left: auto;
    margin-right: auto;
  }
  .k-img-upload-panel .k-img-upload-panel__wrapper-cell .k-upload-panel__content{
    width: 81px;
    height: 81px;
    background: url('./add-bar.png') no-repeat;
    background-size: contain;
    position: relative;
    overflow: hidden;
  }
  .k-img-upload-panel .k-img-upload-panel__wrapper-card .k-upload-panel__content{
    width: 135px;
    height: 81px;
    background: url('./card-a.png') no-repeat;
    background-size: contain;
    margin: auto;
    position: relative;
    overflow: hidden;
  }
  .k-img-upload-panel .k-upload-panel__pre-show{
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat
  }
  .k-img-upload-panel .k-upload-panel__file-input{
    opacity: 0;
  }
  .k-img-upload-panel .full-layer{
    width: 100%;
    height: 100%;
  }
  .k-img-upload-panel .abs-lt{
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
