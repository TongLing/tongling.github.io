
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
