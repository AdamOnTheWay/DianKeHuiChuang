/**
 * Created by heyuwei on 2015/7/18.
 */
function change()
{

    var more = document.getElementById("more");
    var clothes_more= document.getElementById("clothes_more");


    if (more.value == "") {
        clothes_more.style.background="rgb(191,191,191)";
        clothes_more.disabled=true;
    }
    else  {
        clothes_more.style.background="rgb(0,174,239)";
        clothes_more.disabled=false;
    }
}