document.addEventListener("DOMContentLoaded",function(){
       //点击返回头部
              var gk=document.querySelector(".top_f");
                        gk.onclick=()=>{
                          console.log(666);
                let timer = setInterval(()=>{
                        let speed = window.scrollY/10;
                        scrollBy(0,-speed);

                        if(window.scrollY <= 0){
                          clearInterval(timer);

                          scrollTo(0,0);
                        }
                      },30);

              }
              //商品详情放大镜
              magnifier(".spjs_tp",380,380,"../img/1_05868689593398280_1280.jpg",100,100,380);
              let tp=document.querySelector(".sptp");
              console.log(tp);
              tp.onmouseover=function(e){
                if(e.target.tagName.toLowerCase()=="img"){
                  e.target.style.border="1px solid red";
                  let src=e.target.src;
                  magnifier(".spjs_tp",380,380,src,100,100,380);

                }  
              }
              tp.onmouseout=function(e){
                if(e.target.tagName.toLowerCase()=="img"){
                 e.target.style.border="none";
                }  
              }
              //发送数据库请求返回商品数据
              var id=location.search;
              var statusCode = [200,304];
              var spms=document.querySelector(".sp_ms");
              var spsm=document.querySelector(".spjs_sm");
              var nowp=document.querySelector(".now_b");
              var spx=document.querySelector(".sp_x del");
              id=id.slice(1);
              console.log(id);
              let xhr=new XMLHttpRequest();
              xhr.onload=()=>{
                  if(statusCode.indexOf(xhr.status)>=0){
                   let data=JSON.parse(xhr.responseText);
                   let goods=data[0];
                   // console.log(goods);
                    magnifier(".spjs_tp",380,380,goods.imgurl,100,100,380);
                    spms.innerText=goods.title;
                    spsm.innerText=goods.title;
                    nowp.innerText=goods.now;
                    spx.innerText=goods.price;
                  }
              }
            xhr.open("get",'../api/spqx.php?id='+id,true);
            xhr.send();
            var ji=document.querySelector(".ji");
            var js=document.querySelector(".js");
            var gg=document.querySelector(".gg");
            ji.onclick=()=>{
              let jk=gg.value;
              jk++;
              gg.value=jk;
            }
            js.onclick=()=>{
              let jk=gg.value;
              if(jk<=1){
                jk==1;
              }else{
                jk--;
              }
              gg.value=jk;
            }
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
      var frgwc=document.querySelector(".fr");
      var tgg=document.querySelector(".try");
      var fixed_add_ca=document.querySelector(".fixed_add_ca");
      //封装写入cookie
      function cg(goodslist){
         for(i=0;i<goodslist.length;i++){
                    if(goodslist[i].guid===id){
                      goodslist[i].qity=goodslist[i].qity-0+(gg.value-0);
                      break;
                    }
                  }
                  var imgur=document.querySelector(".magnifierMainImg");
                  console.log(imgur.src);
                  //如果循环跑完，无法找到相同的id,说明为第一次添加
                  if(i===goodslist.length){
                    //声明一个对象存放商品信息
                    var mygoods={
                  guid:id,
                  imgurl:imgur.src,
                  spname:spms.innerText,
                  price:nowp.innerText,
                  qity:gg.value
                 }
                  goodslist.push(mygoods);
                 
                  }

             document.cookie="goodslist="+JSON.stringify(goodslist)+";expires="+da.toUTCString()+";Path="+escape('/');
                location.reload();
      }
                //存入cookie
                gwc.onclick=function(){
               //声明一个数组存放商品
             // pao(frgwc, tgg.offsetLeft, tgg.offsetTop,"frgwc.style.opacity=0;");
             // frgwc.style.opacity=1;
             // console.log(666);
             cg(goodslist);
               
}

          //出现吸顶盒
          var fix=document.querySelector(".fix");
          var now_b=document.querySelector(".now_b");
          var db_price=document.querySelector(".jsspjg");
          var r_t=document.querySelector(".r_t");
          window.onscroll=()=>{
            if(window.scrollY>=750){
            r_t.style.display="none";
            fix.style.display="block";
           db_price.innerText=now_b.innerText;
            }else if(window.scrollY<750){
           fix.style.display="none";
           r_t.style.display="block";
            }
          }              
});