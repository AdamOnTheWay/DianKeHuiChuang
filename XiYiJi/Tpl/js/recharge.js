/**
 * Created by heyuwei on 2015/7/16.
 */

function change()
{

    var money = document.getElementById("money");
    var submit= document.getElementById("submit");


    if (money.value == "") {
        submit.style.background="rgb(191,191,191)";
        submit.disabled=true;
    }
    else  {
       submit.style.background="rgb(0,174,239)";
        submit.disabled=false;
    }
}

function check()
{
    var val=money.value;
    var m = /^\d+$/;
    var cue=document.getElementById("cue");
    if(!val.match(m)){
        cue.style.background="red";
    }
    else{
        window.location.href="index.html";
    }
}
