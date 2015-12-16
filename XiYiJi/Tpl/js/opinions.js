/**
 * Created by Adam on 15/7/17.
 */
function isEmpty(){
    var enter = document.getElementById("enterContent").value;
    if(enter == ""){
        alert("请先留下您宝贵的意见哦");
        return false;
    }
    else{
        window.open('afterOpinions.html');
    }
}