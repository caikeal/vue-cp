// 获取本地上传的图片
export function getFileUrl (sourceId) {
  let url;
  let isImg = false;
  let type = sourceId.files.item(0) ? sourceId.files.item(0).type : '';
  // 判断是否为图片
  switch (type) {
    case 'image/png':
      isImg = true;
      break;
    case 'image/jpeg':
      isImg = true;
      break;
    case 'image/jpg':
      isImg = true;
      break;
    default:
      isImg = false;
      break;
  }

  if (!isImg) {
    url = null;
  }

  try {
    if (navigator.userAgent.indexOf('MSIE') >= 1) { // IE
      url = sourceId.value;
    } else if (navigator.userAgent.indexOf('Firefox') > 0) { // Firefox
      url = window.URL.createObjectURL(sourceId.files.item(0));
    } else if (navigator.userAgent.indexOf('Chrome') > 0) { // Chrome
      url = window.URL.createObjectURL(sourceId.files.item(0));
    } else {
      url = window.URL.createObjectURL(sourceId.files.item(0));
    }
  } catch (e) {
    url = null;
  }
  return url;
};
