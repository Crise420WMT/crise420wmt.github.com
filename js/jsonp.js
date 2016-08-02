function jsonp(json){
    json=json||{};
    if(!json.url){
        alert('连接口都不传，做什么搜索啊！');
        return;
    }
    json.data=json.data||{};
    //alert(json.data);
    json.cbName=json.cbName||'cb';

    var fnName='show'+Math.random();   //''里面不止可以是show，可以是任意字符串。
    fnName=fnName.replace('.','');
    json.data[json.cbName]=fnName;    //应该是将json.cbName传进json.data中，
                                      //然后在将函数名fnName的值赋给json.cbName
    window[fnName]=function(json1){
        json.success&&json.success(json1);
        //console.log(oHead);
        oHead.removeChild(oS);
       // alert(1);
    };

    var arr=[];
    for(var name in json.data){
        arr.push(name+'='+json.data[name]);
        //alert(1);
    }

    var oHead=document.getElementsByTagName('head')[0];
    var oS=document.createElement('script');  //是script不是---javascript，，一定要注意
    oS.src=json.url+'?'+arr.join('&');
    oHead.appendChild(oS);
}