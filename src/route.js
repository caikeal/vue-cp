import UploadImgView from './views/upload-img.vue';
const routes = [
  // 图片上传视图
  {path: '/img-tpl', name: 'UploadImgView', component: UploadImgView},

  // catch all redirect
  { path: '*', redirect: '/img-tpl' }
];

export default routes;
