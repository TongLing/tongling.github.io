---
layout: post
title: 首页的图片自动切换功能
author: TongLing
---


不知道你有没有注意到，本博客首页的图片会自动切换？我最近写了点代码，实现了这个功能。这个功能挺有意思的，push上来分享一下~ 以后有时间的话打算写一个这样的插件跟大家交流交流~

<h3>1. 描述 </h3>
我的服务器目录文件夹结构是这样的:

```
 +index.html 
 |--js        // js脚本和文件
 |--css       // css文件
 |--img       // 各种图片
 |--resources // 除了以上资源以外的其他资源
 |--posts     // 博客文章存放在这里
```

在js文件夹下新建一个脚本，使用img文件夹下的图片，实现对首页进行图片自动切换的功能。

<h3>2. 实现方法</h3>
在index.html中，找到与图片相关的DOM节点:

```
<header class="post-header">
......
</header>
```

与此相关的css样式是这样的:

```
.page-header {
  color: #fff;
  text-align: center;
  opacity: 0.95;    
  background:"#56687c url('../img/default.jpg no repeat 50%')";
}
```

可以看到default.jpg被固定加载进来了。

所以为了实现自动切换功能，我们的思路就是让css中加载的图片路径自动变化。

在js文件夹下新建一个changeTopImg.js脚本，插入以下代码:

```
// 修改顶端图片的样式。在资源文件中放置了很多图片（coverxx），需要取出图片时
// 就可以直接使用Javascript修改相应的样式.

var random = Math.floor(Math.random()*20); //生成0~19的随机数

if (random < 10){random = "0"+random;}

var cls = document.getElementsByClassName('page-header'); //取得节点

cls[0].style.background="#56687C 

url('../img/cover"+random+".jpg') no-repeat 50%"; //修改样式
```

再将js代码引入index.html网页中，测试效果。