;(function(){
    var timer=null;
//    var left=0;
//    var speed=0;

    //document.title=0;
    window.elastic=function (obj,iTarget){
  //封闭空间里的函数，，只有加在window下才可以调用到
        clearInterval(timer);
        var left=obj.offsetLeft;
        var speed=0;
        timer=setInterval(function(){
            speed-=(left-iTarget)/20;
            speed*=0.85;
            left+=speed;
            //document.title++;
            obj.style.left=left+'px';
            if(Math.abs(speed)<1&&Math.round(left)==iTarget){
                obj.style.left=iTarget+'px';
                speed=0;
                clearInterval(timer);
            }
        },30);
    };
})();