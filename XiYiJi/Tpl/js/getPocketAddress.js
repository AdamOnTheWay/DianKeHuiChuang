/**
 * Created by Adam on 15/7/21.
 */

function getClass(tagName,className) //获得标签名为tagName,类名className的元素
 {
    if(document.getElementsByClassName) //支持这个函数
     {        return document.getElementsByClassName(className);
     }
    else
     {       var tags=document.getElementsByTagName(tagName);//获取标签
         var tagArr=[];//用于返回类名为className的元素
         for(var i=0;i < tags.length; i++)
         {
             if(tags[i].class == className)
             {
                 tagArr[tagArr.length] = tags[i];//保存满足条件的元素
             }         
         }
         return tagArr;
     }
 
 }

function imgOnclick(id) {

    var imgName = document.getElementById(id);
    var img=document.getElementsByTagName('img');
        if (imgName.getAttribute("src", 2) == "../imgs/getPocketAddress/circle.png") {
        var ip=getClass('div','everyAddress');
        
        for (var i=0;i<ip.length;i++){

        //ip[i].index=i;

        img[i].src="../imgs/getPocketAddress/circle.png";
        }
        imgName.src = "../imgs/getPocketAddress/circle_pressed.png";
        } 
    }    



    /*function imgOnclick(id) {
        var array = [];
       var i = 1;
       for(i = 1;i<=3;i++){
            array[i] = document.getElementById('i').getAttribute("src",2);
        }
        alert(array);
        var imgName = document.getElementById(id);
    
        for(i = 1;i<=3;i++){
            document.getElementById('i').getAttribute("src",2).src = "../imgs/getPocketAddress/circle.png";
        }
    
        imgName.src="../imgs/getPocketAddress/circle_pressed.png";
    
        if(imgName.getAttribute("src",2)=="../imgs/getPocketAddress/circle.png"){
            imgName.src="../imgs/getPocketAddress/circle_pressed.png";
        }
        else{
            imgName.src="../imgs/getPocketAddress/circle.png";
        }
    }*/
  