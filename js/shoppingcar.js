document.addEventListener("DOMContentLoaded",function(){

            var sf=document.querySelector(".splist_f");
          var splist=document.querySelector(".splist");
         //获取cookie生成小购物车
          var goodslist=Cookie.get("goodslist");
              //判断页面加载的时候goodslist是否为空
              if(goodslist===""){
                goodslist=[];
              }else{
                goodslist=JSON.parse(goodslist);
            
              rad();
              }
              var sp2=document.querySelector(".sp2");
              function rad(){
                
                var gwcul1=document.createElement("ul");
                gwcul1.className="gwxk";
                gwcul1.innerHTML="";
             gwcul1.innerHTML=goodslist.map(function(goods){
          console.log(666);
          // console.log(sum);
          return `
          <li data-guid="${goods.guid}">
          <input type="checkbox" name="selectAll" class="gx2">
          <img src="${goods.imgurl}"/>
          <h4>${goods.spname}</h4>
          <p class="pj">￥&nbsp;${goods.price}</p>
          <p class="spjj">
          <span class="spjc">-</span>
          <input type="text" class="srk" value="${goods.qity}">
          <span class="spj">+</span>
          </p>
          <p class="price">￥&nbsp;${goods.price*goods.qity}</p>
          <button class="btn-close">删除</button></li>
          `;
         }).join("");
         //把ul写入页面；
          splist.insertBefore(gwcul1,sf);
              }      
});