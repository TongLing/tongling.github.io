# encoding=utf-8
import json
import base64
import requests

"""
输入你的微博账号和密码，可去淘宝买，一元七个。
建议买几十个，微博限制的严，太频繁了会出现302转移。
或者你也可以把时间间隔调大点。
"""
myWeiBo = [
# {'no': 'jiadieyuso3319@163.com', 'psw': 'a123456'},
# {'no': 'shudieful3618@163.com', 'psw': 'a123456'},
    {'no':'kakale_3@163.com', 'psw':'a456123'},
    {'no':'ningyyyy_happy@163.com', 'psw':'js456123'},
    {'no':'kiss_baby-520@163.com', 'psw':'c456123'},
    {'no':'jiegjieg00fan@163.com', 'psw':'a456123'},
    {'no':'keny_com@163.com', 'psw':'c456123'},
    {'no':'kevin_likai@163.com', 'psw':'c456123'},
    {'no':'kg_wak@163.com', 'psw':'a456123'},
    {'no':'kpkp_8899@163.com', 'psw':'c456123'},
    {'no':'gzq_0324@163.com', 'psw':'a456123'},
    {'no':'gqiq3011635@163.com', 'psw':'js161020'},
    {'no':'yyze4860790@163.com', 'psw':'js161017'},
    {'no':'nqos0423284@163.com', 'psw':'yc20161019'},
    {'no':'boeu3717581@163.com', 'psw':'yc20161019'},
    {'no':'mmjg6280393@163.com', 'psw':'yc20161019'},
    {'no':'gaohan.jay@163.com', 'psw':'yc456123'},
    {'no':'gaoxinjian.186@163.com', 'psw':'yc456123'},
    {'no':'gchzrj@163.com', 'psw':'yc456123'},
    {'no':'gdhmdg@163.com', 'psw':'yc456123'},
    {'no':'guanbin111@163.com', 'psw':'yc456123'},
    {'no':'gskhby@163.com', 'psw':'yc456123'},
    {'no':'gsq5512@163.com', 'psw':'yc456123'},
    {'no':'gyjgyj1973@163.com', 'psw':'yc456123'},
    {'no':'gaza_0211@163.com', 'psw':'yc456123'},
    {'no':'guangganlonggong@163.com', 'psw':'yc456123'},
    {'no':'guiliu070603@163.com', 'psw':'yc456123'},
    {'no':'guochangqingkua@163.com', 'psw':'yc456123'},
    {'no':'guoda1234@163.com', 'psw':'yc456123'},
    {'no':'guojinhai1408@163.com', 'psw':'yc456123'},
    {'no':'guo13572323179@163.com', 'psw':'yc456123'},
    {'no':'guzhaosong3@163.com', 'psw':'yc456123'},
    {'no':'gsjcgj@163.com', 'psw':'a456123'},
    {'no':'goodboy_han@163.com', 'psw':'yc456123'},
    {'no':'gabi-163@163.com', 'psw':'yc456123'},
    {'no':'guosong815@163.com', 'psw':'yc456123'},
    {'no':'gungrave_2008@163.com', 'psw':'yc456123'},
    {'no':'guangcun408346836@163.com', 'psw':'yc456123'},
    {'no':'guo__113132362@163.com', 'psw':'yc456123'},
    {'no':'guoqing_007008@163.com', 'psw':'yc456123'},
    {'no':'grace_beijing@163.com', 'psw':'yc456123'},
]


def getCookies(weibo):
    """ 获取Cookies """
    cookies = []
    loginURL = r'https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.15)'
    for elem in weibo:
        account = elem['no']
        password = elem['psw']
        username = base64.b64encode(account.encode('utf-8')).decode('utf-8')
        postData = {
            "entry": "sso",
            "gateway": "1",
            "from": "null",
            "savestate": "30",
            "useticket": "0",
            "pagerefer": "",
            "vsnf": "1",
            "su": username,
            "service": "sso",
            "sp": password,
            "sr": "1440*900",
            "encoding": "UTF-8",
            "cdult": "3",
            "domain": "sina.com.cn",
            "prelt": "0",
            "returntype": "TEXT",
        }
        session = requests.Session()
        r = session.post(loginURL, data=postData)
        jsonStr = r.content.decode('gbk')
        info = json.loads(jsonStr)
        if info["retcode"] == "0":
            print "Get Cookie Success!( Account:%s )" % account
            cookie = session.cookies.get_dict()
            cookies.append(cookie)
        else:
            print "Failed!( Reason:%s )" % info['reason']
    return cookies


cookies = getCookies(myWeiBo)
print "Get Cookies Finish!( Num:%d)" % len(cookies)
