// 修改顶端图片的样式。在资源文件中放置了很多图片（coverxx），需要取出图片时
// 就可以直接使用Javascript修改相应的样式
var random = Math.floor(Math.random()*20);
if (random < 10){random = "0"+random;}
var cls = document.getElementsByClassName('page-header');
cls[0].style.background="#56687C url('../img/cover"+random+".jpg') no-repeat 50%";
