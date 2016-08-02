domReady(function(){
    var aLi=document.querySelectorAll('.metro li');
    var oA=new Audio();
    //console.log(aLi[0].children[2].tagName);
    for(var i=0;i<aLi.length;i++) {
        aLi[i].index=i;
        aLi[i].onmouseover = function (ev) {
            var oSon = this.children[0].children[2];
            var oEv = ev || event;
            var oForm = oEv.fromElement || oEv.relatedTarget;

            if (this.contains(oForm))return false;
            oA.src=oggSound['sound'+(49+this.index)];
            oA.play();
            switch (findDir(this, oEv)) {
                case 0:
                    oSon.style.left = 150 + 'px';
                    if (oSon.className == 'show') {
                        oSon.style.left = 310 + 'px';
                    }
                    oSon.style.top = 0;
                    break;
                case 1:
                    oSon.style.top = 150 + 'px';
                    oSon.style.left = 0;
                    break;
                case 2:
                    oSon.style.left = -150 + 'px';
                    if (oSon.className == 'show') {
                        oSon.style.left = -310 + 'px';
                    }
                    oSon.style.top = 0;
                    break;
                case 3:
                    oSon.style.top = -150 + 'px';
                    oSon.style.left = 0;
                    break;
            }
            //if(oSon.className)
            move(oSon, {left: 0, top: 0}, {time: 500});
        };
        aLi[i].onmouseout = function (ev) {
            var oEv = ev || event;
            var oTo = oEv.toElement || oEv.relatedTarget;
            var oSon = this.children[0].children[2];

            if (this.contains(oTo))return false;
            //console.log(Math.round((Math.atan2(disY,disX)*180/Math.PI+180)/90)%4);
            //if(oTarget.id!='box')
            switch (findDir(this, oEv)) {
                case 0:
                    if (oSon.className == 'show') {
                        move(oSon, {left: 310, top: 0});
                    } else {
                        move(oSon, {left: 150, top: 0});
                    }
                    break;
                case 1:

                    move(oSon, {left: 0, top: 150});
                    break;
                case 2:
                    if (oSon.className == 'show') {
                        move(oSon, {left: -310, top: 0});
                    } else {
                        move(oSon, {left: -150, top: 0});
                    }
                    //move(oSon,{left:-150,top:0});
                    break;
                case 3:
                    move(oSon, {left: 0, top: -150});
                    break;
            }
        };
    }
});