---
layout: post
title: Javascript中的时间处理问题
author: TongLing
---


今天在做前端开发的时候，需要在JSON用前后端传递相应的时间。需要传递的时间有两个：StartTime和EndTime。

startTime表示当前的时间，格式为"2016-05-04"这样的。endTime表示一个星期以前的时间，格式为"2016-04-28"。

```
    var now = new Date();    
    var pre = new Date();   // now 和 pre 都是 Date 类
    pre.setDate(now.getDate()-7); // pre修改以后，得到的还是Date类

    //将标准Date格式，转换成"2016-05-03"这样的字符串格式。
     function setFormat(date){
        var year = date.getFullYear();//年份
        var month = date.getMonth();  //月份
        var date = date.getDate();    //日期
        return (year + "-" + month + "-" + date);//拼接成字符串
    }
    var endTime = setFormat(now);
    var startTime = setFormat(pre);
```
