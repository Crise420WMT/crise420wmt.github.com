function getStyle(obj,name){
    return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
    clearInterval(obj.timer);
    if(!json){
        alert('tmd');
        return;
    }
    options=options||{};
    options.type=options.type||'linear';
    options.time=options.time||500;

    var iCount=Math.ceil(options.time/30);
    var start={};
    var dis={};

    for(var name in json){
        start[name]=parseInt(getStyle(obj,name));
        if(isNaN(start[name])){
            switch (name){
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
                case 'width':
                    start[name]=obj.offsetWidth;
                    break;
                case 'height':
                    start[name]=obj.offsetHeight;
                    break;
            }
        }
        dis[name]=json[name]-start[name];
    }

    var iNow=0;
    obj.timer=setInterval(function(){
        iNow++;

        for(var name in json){
            switch (options.type){
                case 'linear':
                    var a=iNow/iCount;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=iNow/iCount;
                    var cur=start[name]+dis[name]*Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a=1-iNow/iCount;
                    var cur=start[name]+dis[name]*(1-Math.pow(a,3));
                    break;
            }
            if(name!='opacity'){
                obj.style[name]=cur+'px';
            }else{
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+(100*cur)+')';
            }
        }
        if(iNow==iCount){
            clearInterval(obj.timer);
            options.end&&options.end();
        }
    },30);
}