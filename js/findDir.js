function findDir(obj,oEv){
    var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
    var scrollL=document.body.scrollLeft || document.documentElement.scrollLeft;
    var x=getPos(obj).left+obj.offsetWidth/2-(oEv.clientX+scrollL);
    var y=getPos(obj).top+obj.offsetHeight/2-(oEv.clientY+scrollT);

    return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}