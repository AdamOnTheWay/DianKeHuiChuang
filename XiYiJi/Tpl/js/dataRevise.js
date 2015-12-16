/**
 * Created by heyuwei on 2015/7/23.
 */
function c()
{

    var nickname = document.getElementById("nickname");
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var submit= document.getElementById("change");


    if (nickname.value != "" || name.value !="" ||age.value !="" ||email.value !=""||phone.value !="" ||address.value !="") {
        submit.style.background="rgb(0,174,239)";
        submit.disabled=false;
    }
    else  {
        submit.style.background="rgb(191,191,191)";
        submit.disabled=true;
    }
}

function d()
{
    var submit= document.getElementById("change");
    submit.style.background="rgb(0,174,239)";
    submit.disabled=false;


}