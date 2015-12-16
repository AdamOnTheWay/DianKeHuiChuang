/**
 * Created by heyuwei on 2015/7/18.
 */
function change()
{

    var piece = document.getElementById("piece");
    var clothes_details= document.getElementById("clothes_details");


    if (piece.value == "") {
        clothes_details.style.background="rgb(191,191,191)";
        clothes_details.disabled=true;
    }
    else  {
        clothes_details.style.background="rgb(0,174,239)";
        clothes_details.disabled=false;
    }
}

function changetwo()
{

    var t;
    var img=document.getElementById("img")
    if (t.value == "0") {
        img.src="../imgs/clothes/beforemore.png";
    }
    else if (t.value == "1"){
        img.src="../imgs/clothes/aftermore.png";
    }
}

function check()
{
    var val=piece.value;
    var m = /^\d+$/;
    if(!val.match(m)){
       alert("请输入正确数值！");
    }
    else{
        window.location.href="personal.html";
    }
}