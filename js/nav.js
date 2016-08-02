domReady(function(){
    var aA=document.querySelectorAll('.navTxt a');
    var oDiv=document.querySelector('.hover');
    //console.log(aA.length);
    for(var i=0;i<aA.length;i++){
        aA[i].index=i;
        aA[i].onmouseover=function(){
            elastic(oDiv,this.index*105);
        };
    }
});