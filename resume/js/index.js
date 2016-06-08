        var RollFlag = 1;
		var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta && RollFlag) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
               
               Rollup();
                RollFlag=0;
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
               Rolldown();
                RollFlag=0;
            
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
               Rollup();
                RollFlag=0;
            }
            if (e.detail< 0) { //当滑轮向下滚动时
                Rolldown();
                RollFlag=0;
                 
            }
        }
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc; 

function Rollup(){
    var num = -1;
    //计算出当前的num位置
    var par = document.getElementById("content");
    var a = par.childNodes[1];
    var num = 0;
    do{

        if (a.getAttribute("class") === "show") {break;}
        else {
            a=a.nextElementSibling;
            num++;
        }
    }while(a.nextElementSibling !== null)
    if (num === 0) return;
    else{
        switchMenu(num-1);
        console.log(num);
        return;
    }
}

function Rolldown(){
    var num = -1;
    //计算出当前的num位置
    var par = document.getElementById("content");
    var a = par.childNodes[1];
    var num = 0;
    do{

        if (a.getAttribute("class") === "show") {break;}
        else {
            a=a.nextElementSibling;
            num++;
        }
    }while(a.nextElementSibling !== null)
    if (num === 5) return;
    else{
        switchMenu(num+1);
        console.log(num);
        return;
    }
}

function switchContent(num) {
    var par = document.getElementById("content");
    var a = par.childNodes[1];
    var b = par.childNodes[1];
    a.setAttribute("class","hide");
    
    do{
         a=a.nextElementSibling;
        a.setAttribute("class","hide");  
    }
    while(a.nextElementSibling !== null)
    for(var cnt = 0; cnt <num; cnt++)
    {
        b=b.nextElementSibling;
    }
    b.setAttribute("class","show");
}
function switchNav(num) {
    var len = document.getElementsByClassName("menu").length;
    for (var i = 0; i < len; i++)
    {
        if (i==num) {continue;}
        document.getElementsByClassName("menu")[i].style.background="none";
        document.getElementsByClassName("menu")[i].style.boxShadow="none";
    }
    document.getElementsByClassName("menu")[num].style.background="#444444";
    document.getElementsByClassName("menu")[num].style.boxShadow="1px 1px 1px #CCCCCC";
    document.getElementById("w").setAttribute("class", "hide");
    document.getElementById("xmjl").setAttribute("class", "hide");
    document.getElementById("jybj").setAttribute("class", "hide");
    document.getElementById("sxjl").setAttribute("class", "hide");
    document.getElementById("ljgd").setAttribute("class", "hide");
    document.getElementById("zyjn").setAttribute("class", "hide");
    
    switch (num) { 
    case 0:
            document.getElementById("w").setAttribute("class", "show");
            break;
    case 1:
            document.getElementById("xmjl").setAttribute("class", "show");
            break;
    case 2:
            document.getElementById("zyjn").setAttribute("class", "show");
            break;
    case 3:                                      document.getElementById("jybj").setAttribute("class", "show");
            break;
    case 4:
        document.getElementById("sxjl").setAttribute("class", "show");
        break;
    case 5:
        document.getElementById("ljgd").setAttribute("class", "show");
        break;
    }
}


function switchMenu(num) {
    
    switchNav(num);
    switchContent(num);
    
}
