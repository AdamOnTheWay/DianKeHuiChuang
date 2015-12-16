/**
 * Created by Adam on 15/7/24.
 */
var countdown=60;
function settime(val) {
    var isempty = document.getElementById("phone").value;
    if(isempty == ""){
        alert("请先输入您的手机号码");
        return false;
    }
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value="免费获取验证码";
        countdown = 60;
        return 0;
    } else {
        val.setAttribute("disabled", true);
        val.value="重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function() {
        settime(val)
    },1000)
}

function isConfirmed(){
    var isempty = document.getElementById("phone").value;
    var verifyNumber = document.getElementById("verify").value;
    if(verifyNumber == "" ||isempty == ""){
        alert("请先输入手机号码再继续");
        return false;
    }
}
