document.addEventListener("DOMContentLoaded",function(){
          var gwc=document.querySelector(".gcar");
            
            console.log(gwc);
         //获取cookie生成小购物车
          var goodslist=Cookie.get("goodslist");
              //判断页面加载的时候goodslist是否为空
              if(goodslist===""){
                goodslist=[];
              }else{
                goodslist=JSON.parse(goodslist);
                 var spsl=document.querySelector(".i_car_num");
             spsl.innerText=goodslist.length;
                var sum=0;
              var gwcsx=document.querySelector(".gwc")
              var gwcul=document.querySelector(".xgwc");
              console.log(666);
              console.log(gwcul);
              var spshu=gwcsx.children[1];
              var sp2=document.querySelector(".sp2");
              sp2.innerText=goodslist.length;
              var sp3=document.querySelector(".sp3");
              var car_num=document.querySelector(".car_num");
              car_num.innerText=goodslist.length;
              rad();
              }
              function rad(){
                gwcul.innerHTML="";
             gwcul.innerHTML=goodslist.map(function(goods){
          //计算商品价格
          sum+=goods.price*goods.qity;
          sp3.innerText=sum;
          return '<li data-guid="'+goods.guid+'">'+
                  '<img src="'+goods.imgurl+'"/>'+
                  '<h4>'+goods.spname+'</h4>'+
                  '<p class="price">￥:<span>'+goods.price+'&times;'+goods.qity+'</span></p>'+
                  '<button class="btn-close">删除</button></li>';
         }).join("");
         //把ul写入页面；
         gwcsx.insertBefore(gwcul,spshu);
              }
              var da=new Date();
               da.setDate(da.getDate()+7);
        //点击删除购物车商品
       document.onclick=function(e){
       if(e.target.className=="btn-close"){
        gwcul.removeChild(e.target.parentNode);
        goodslist.shift();
        document.cookie="goodslist="+JSON.stringify(goodslist)+";expires="+da.toUTCString()+";Path="+escape('/');
        sp2.innerText=goodslist.length;
        car_num.innerText=goodslist.length;
        rad();
      }
     }
               
});