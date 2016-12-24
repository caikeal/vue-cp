<template>
  <div class="img-upload">
    <k-img-btn></k-img-btn>
    <k-img-btn type="card"></k-img-btn>
  </div>
</template>

<script>
import KImgUpload from '../components/image-upload/index.js';
export default {
  name: 'img-temp',
  components: {
    [KImgUpload.name]: KImgUpload
  }
};
</script>
