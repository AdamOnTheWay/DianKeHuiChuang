/**
 * Created by Adam on 15/7/18.
 */


    function GetDateStr(AddDayCount) {
        var now = new Date();
        var dd = new Date(now.getTime() + AddDayCount*24*60*60*1000);  //后一天
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        var final = y+"-"+m+"-"+d;
        //alert(final);
         document.getElementById('day').innerHTML=final;
    }

    function isNonn(x){
        if(x == 0){
            document.getElementById('morOrNoon').innerHTML="上午  8：30 ~ 11：30";
        }
        else if(x == 1){
            document.getElementById('morOrNoon').innerHTML="下午  14：30 ~ 17：00";
        }
    }
