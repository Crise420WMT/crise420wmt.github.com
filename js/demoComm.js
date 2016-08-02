function demoComm(aBtn,aLi,arr,arr1,iCount){
    var timer=null;
    var iNow=0;     //可以把这句拿到oBtn.onclick=function(){}里面去，更精简
    var bSys=true;
    var item=1;

    for(var i=0;i<aLi.length;i++){
        aLi[i].style.position='absolute';
        aLi[i].style.left=arr[i].left+'px';
        aLi[i].style.top=arr[i].top+'px';
        aLi[i].style.margin=0;
    }
    for(var i=0;i<aBtn.length;i++){
        ;(function(i){
            aBtn[i].onclick=function(){
                var _this=this;
                aBtn[i].index=i;
                //iCount=this.index;
                //console.log(iCount);
                if(bSys){
                    bSys=false;

                    timer=setInterval(function(){
                        ;(function(index){
                            if(aLi[index].children.length){
                                move(aLi[index].getElementsByTagName('img')[0],{left:arr1[item].left-296,top:arr1[item].top-204,width:0,height:0},{time:200});
                            }
                            move(aLi[index],{left:arr1[item].left,top:arr1[item].top,width:0,height:0,opacity:0},{time:200,end:function(){
                                if(index==aLi.length-1){
                                    item=_this.index;
                                    for(var i=0;i<aBtn.length;i++){
                                        aBtn[i].className='';
                                    }
                                    aBtn[item].className='on';
                                    //console.log(item);
                                    for(var i=0;i<aLi.length;i++){
                                        //console.log(1);
                                        aLi[i].style.left=arr1[item].left+'px';
                                        aLi[i].style.top=arr1[item].top+'px';
                                        //aLi[index].children[0].children[0].style.left=arr1[item]
                                       // aLi[i].innerHTML=i+9*(item-1);
                                        if(!arrImg[i+(item-1)*9]){
                                            aLi[i].innerHTML='敬请期待,添加中...';
                                            //console.log(aLi[i].children.length);
                                        }else{
                                            aLi[i].innerHTML='<a href="'+arrImg[i+(item-1)*9].aHref+'" target="_blank">'
                                                +'<img class="ac" src="image/'+arrImg[i+(item-1)*9].iSrc+'" alt=""/>'
                                                +'<div class="div_hidden">'+arrImg[i+(item-1)*9].word+'</div></a>';
                                        }
                                    }
                                    //console.log({left:aLi[index].offsetLeft,top:aLi[index].offsetTop});
                                    timer=setInterval(function(){
                                        //console.log(i);
                                        if(aLi[index].children.length){
                                            //console.log(aLi[index].children[0].children[0].tagName);
                                            move(aLi[index].getElementsByTagName('img')[0],{left:arr[index].left,top:arr[index].top,width:296,height:204},{time:300,type:'ease-in'});
                                        }
                                        move(aLi[index],{left:arr[index].left,top:arr[index].top,width:296,height:204,opacity:1},{time:200});
                                        //aLi[index].style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
                                        index--;
                                        if(index==-1){
                                            iNow=0;
                                            bSys=true;
                                            clearInterval(timer);
                                        }
                                    },100)
                                }
                            }});
                        })(iNow);
                        iNow++;
                        if(iNow==aLi.length)clearInterval(timer);
                    },100);
                }
            };
        })(i);
    }
}