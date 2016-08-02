function toDou(n){
    return n<10?'0'+n:''+n;
}
domReady(function(){
    var oDiv=document.querySelector('.d_container');
    var aDiv=document.querySelectorAll('.num_container');
    var aUl=document.querySelectorAll('.num_container ul');
    var timer=null;

    function clock(){
        var now=new Date();
        var oH=now.getHours();
        var oM=now.getMinutes();
        var oS=now.getSeconds();
        var str=toDou(oH)+toDou(oM)+toDou(oS);
        for(var i=0;i<aUl.length-1;i++){
            for(var j=0;j<4;j++){
                aUl[i].children[j].children[0].innerHTML=str[i];
            }
        }
        aUl[5].children[0].children[0].innerHTML=str[str.length-1];
        //console.log(str[str.length-1]-1);
        aUl[5].children[1].children[0].innerHTML=(Number(str[str.length-1])+2)%10;
        aUl[5].children[2].children[0].innerHTML=(Number(str[str.length-1])+1)%10;
        aUl[5].children[3].children[0].innerHTML=(str[str.length-1]-1);
    }
    var iNow=1;
    function clear(){
        clearInterval(timer);
        timer=setInterval(function(){
            console.log(1);
            oDiv.style.transition='5s all ease';
            oDiv.style.transform='perspective(1300px) rotateX('+12*iNow+'deg) rotateY('+(12)*iNow+'deg)';
            oDiv.addEventListener('transitionend',function(){
                iNow*=-1;
            },false);
            aUl[5].style.transition='0.1s all cubic-bezier(0, 0.97, 1, 0.47)';

            aUl[5].style.transform='rotateX(-90deg)';
            aUl[5].addEventListener('transitionend',function(){
                clock();
                aUl[5].style.transition='none';
                aUl[5].style.transform='rotateX(0deg)';
                //clear();
            },false);
            //console.log(aUl[5].style.transition);
        },1000);
    }
    clear();
    clock();
});