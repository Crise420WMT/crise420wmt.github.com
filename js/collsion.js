;(function(){
    var timer=null;

//    var l=0;
//    var t=0;

    window.collsion=function(obj,speedX,speedY){
        clearInterval(timer);
        var clientX=document.documentElement.clientWidth-obj.offsetWidth;
        var clientY=document.documentElement.clientHeight-obj.offsetHeight;
        var l=obj.offsetLeft;
        var t=obj.offsetTop;

        timer=setInterval(function(){
            speedY+=3;      //也可以改成speedX
            l+=speedX;
            t+=speedY;

            if(t>=clientY){
                t=clientY;
                speedX*=0.9;
                speedY*=-.9;
            }
            if(l>=clientX){
                l=clientX;
                speedX*=-.9;
                speedY*=.9;
            }
            if(t<=0){
                t=0;
                speedX*=.9;
                speedY*=-.9;
            }
            if(l<=0){
                l=0;
                speedX*=-.9;
                speedY*=.9;
            }
            if(Math.abs(speedX)<1&&Math.abs(speedY)<1&&(t==clientY)){
                clearInterval(timer);
            }
            obj.style.left=l+'px';
            obj.style.top=t+'px';
        },30);

    };
})();