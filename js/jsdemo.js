var arrImg=[
    {aHref:'list_baidu.html',iSrc:'image/baidu.jpg',word:'仿百度搜索效果，主要用到jsonp'},
    {aHref:'list_slide163.html',iSrc:'image/slide163.jpg',word:'仿网易轮播图效果，主要用到运动框架+递归'},
    {aHref:'list_timeout.html',iSrc:'image/timeOut.jpg',word:'倒计时效果，主要用到定时器和new Date()'},
    {aHref:'list_picWall.html',iSrc:'image/picWall.jpg',word:'照片墙，主要用到碰撞交换和判断最小距离机制'},
    {aHref:'list_3dpic.html',iSrc:'image/3dStoge.jpg',word:'仿博彩网3d立体轮换效果，主要改变物理的位置和透明度'},
    {aHref:'list_dragFly.html',iSrc:'image/dragFly.jpg',word:'拖拽放开小球，拖拽越快，小球弹性越高'},

    {aHref:'list_iphoneChange.html',iSrc:'image/iphoneChange.jpg',word:'越接近图标，图标越大，仿iphone菜单效果'},
    {aHref:'list_taobao.html',iSrc:'image/taobao_adv.jpg',word:'仿淘宝广告轮播图，主要用了HTML+CSS+JS'},
    {aHref:'list_starScore.html',iSrc:'image/starScore.jpg',word:'仿豆瓣网评分机制，主要用了HTML+CSS+JS'},
    {aHref:'list_3dshow.html',iSrc:'image/3dshow.jpg',word:'这个一个3D的立体展示效果。主要用了HTML+CSS+JS'},
    {aHref:'list_accordion.html',iSrc:'image/accordion.jpg',word:'手风琴效果，主要用了JS+运动框架'},
    {aHref:'list_squartNine.html',iSrc:'image/squartNine.jpg',word:'九宫格中心放大，主要用了CSS3+运动框架'},
    {aHref:'list_iphoneTab.html',iSrc:'image/iphoneTab.jpg',word:'iphone屏幕滑动，仿iPhone手机触屏效果'}
];
domReady(function(){
    var oDiv=document.querySelector('.zt_top');
    var oBtn=document.querySelector('.zt_foot');
    var oTop=document.querySelector('.toTop');
    var aLi=oDiv.children;
    var aBtn=oBtn.children;
    var scrollH=document.documentElement.scrollHeight||document.body.scrollHeight;
    var clientH=document.documentElement.clientHeight;
    var arr=[];
    var arr1=[];

    //回到顶部按钮
    var timer=null;
    //console.log(oTop.className);
    window.onscroll=function(){
        var scrollT=document.documentElement.scrollTop||document.body.scrollTop;

        if(scrollT>scrollH-clientH-50){
            oTop.style.display='block';
        }else{
            oTop.style.display='none';
        }
    };
    oTop.onclick=function(){
        //clearInterval(timer);
        var start=document.body.scrollTop||document.documentElement.scrollTop;
        var target=0;
        var dis=start-target;
        var time=800;
        var iCount=Math.ceil(time/30);
        var iNow=0;

        timer=setInterval(function(){
            iNow++;
            var cur=start-dis*(iNow/iCount);
            document.documentElement.scrollTop=document.body.scrollTop=cur;
            if(iNow==iCount){
                clearInterval(timer);
                //console.log(1);
                oTop.style.display='none';
            }
        },30);
    };
    for(var i=0;i<aLi.length;i++){
        arr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
    }
    for(var i=0;i<aBtn.length;i++){
        arr1.push({left:aBtn[i].offsetLeft,top:aBtn[i].offsetTop});
    }
    //console.log(aBtn[0].offsetParent);
    //console.log(arr1);
    for(var i=0;i<9;i++){
        aLi[i].innerHTML='<a href="'+arrImg[i].aHref+'" target="_blank">'
            +'<img src="'+arrImg[i].iSrc+'" alt=""/ style="display:block">'
            +'<div class="div_hidden">'+arrImg[i].word+'</div></a>';
        //var oDiv=document.querySelectorAll('.div_hidden')[i];

    }
    demoComm(aBtn,aLi,arr,arr1,arrImg);
})