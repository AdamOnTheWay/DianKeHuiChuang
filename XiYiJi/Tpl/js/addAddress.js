/**
 * Created by Adam on 15/7/17.
 */
function checkPhone(){
    var phone=document.getElementById("telphone").value; //var tel = $("#telNo").val(); //获取手机号
    //var city=document.getElementById("cityName").value;
    var telReg = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);//如果手机号码不能通过验证
    var btnvalue = document.getElementById("saveBtn");
    var zone=document.getElementById("zone").value;
    var community = document.getElementById("community").value;
    var doorNumber = document.getElementById("doorNumber").value;

    if(zone == "" || community == "" || doorNumber == ""){
        alert("请填写完整的信息");
        //btnvalue.style.backgroundColor="#bfbfbf";
        //btnvalue.disabled=true;
        return false;
    }
    if(telReg == false){
        alert("请输入正确的手机号码!");
        return false;
    }
    else{
        //btnvalue.style.backgroundColor="#3AB8BB";
        //btnvalue.disabled=false;
    	window.open('#');
    }
}