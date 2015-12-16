/**
 * Created by Adam on 15/7/21.
 */


function imgOnclick(id) {
    var imgName = document.getElementById(id);
    if (imgName.getAttribute("src", 2) == "../imgs/getPocketAddress/circle.png") {
        imgName.src = "../imgs/getPocketAddress/circle_pressed.png";
    } else {
        imgName.src = "../imgs/getPocketAddress/circle.png";
    }
}


    //function imgOnclick(id) {
    //    var array = [];
    //    var i = 1;
    //    for(i = 1;i<=3;i++){
    //        array[i] = document.getElementById('i').getAttribute("src",2);
    //    }
    //    alert(array);
    //    var imgName = document.getElementById(id);
    //
    //    for(i = 1;i<=3;i++){
    //        document.getElementById('i').getAttribute("src",2).src = "../imgs/getPocketAddress/circle.png";
    //    }
    //
    //    imgName.src="../imgs/getPocketAddress/circle_pressed.png";
    //
    //    if(imgName.getAttribute("src",2)=="../imgs/getPocketAddress/circle.png"){
    //        imgName.src="../imgs/getPocketAddress/circle_pressed.png";
    //    }
    //    //else{
    //    //    imgName.src="../imgs/getPocketAddress/circle.png";
    //    //}
    //}
