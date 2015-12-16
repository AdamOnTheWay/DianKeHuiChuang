/**
 * Created by Adam on 15/7/18.
 */

function isEntered(){

    var btn= document.getElementById("oneKey");

    if(  filled  ){
        btn.style.backgroundColor="#bfbfbf";
        btn.disabled=true;
    }
    else  {
        btn.style.background="#00aeef";
        btn.disabled=false;
    }
}