function settime() {
    var time = "2011/5/24/17/21/0"; /*注意:time的格式 "年/月/日/时/分/秒"*/
    var date = time.split('/');
    var date1 = new Date(); //纪念日
    var date2 = new Date(); //当前时间
    var innerhtml_tip="";
    date1.setFullYear(date[0], (date[1]-1), date[2]); //设置纪念日的年，月，日
    date1.setHours(date[3], date[4], date[5], 0); //设置纪念日的时，分，秒，毫秒
    var differtime = parseInt((date1.getTime() - date2.getTime()) / 1000);
    if (differtime < 0) {
        innerhtml_tip = "<font color='red'>您设置的纪念日已经过去了" 
        + differtime.toString().split('-')[1] 
        + "秒。</font>";
    }else{
        innerhtml_tip = "<font color='green'>距离纪念日还有" + differtime + "秒</font>";
    }
    document.getElementById("label1").innerHTML = innerhtml_tip;
    setTimeout("settime()", 1000);
}