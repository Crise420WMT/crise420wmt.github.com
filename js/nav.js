domReady(function(){
    var aA=document.querySelectorAll('.navTxt a');
    var oDiv=document.querySelector('.hover');
    var audio=new Audio();
    //console.log(aA.length);
    for(var i=0;i<aA.length;i++){
        aA[i].index=i;
        aA[i].onmouseover=function(){
            elastic(oDiv,this.index*105);
            audio.src='mp3/ben.wav';
            audio.play();
        };
    }
});