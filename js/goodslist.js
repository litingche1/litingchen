document.addEventListener("DOMContentLoaded",()=>{
            let goodslist = document.querySelector('.splb');
            let toobar = document.querySelector('.jgpx');
            let spxl = document.querySelector('.spxl');
            let jgmr = document.querySelector('.sgmr');
            let gsp = document.querySelector('.gsp');
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                    let data = JSON.parse(xhr.responseText);
                    gsp.innerHTML=data.total;
                    let cont = data.data.map(goods=>{
                        return `<li data-id="${goods.id}">
                            <img src="${goods.imgurl}"/>
                            <p class="price"><span>${(goods.now)}</span></p>
                            <p class="xj"><del>${goods.price}</del></p>
                            <h4>${goods.title}</h4>
                        </li>`
                    }).join('');

                    // 写入页面
                    goodslist.innerHTML ="";
                    goodslist.innerHTML =cont;
                }
            }

            // 2）配置参数，建立与服务器的连接
            xhr.open('get','../api/goodslist.php?page=1&qty=5',true);

            xhr.send();

            let desc = false;
            // 价格排序
            toobar.onclick =e=>{
                if(e.target.className === 'icon_p'){
                    console.log(666);
                    desc = !desc;
                    xhr.open('get','../api/goodslist.php?sort=now' + (desc?'&desc':''),true);
                    xhr.send();
                }
            }
            let xl=false;
             // 销量排序
           spxl.onclick =e=>{
                if(e.target.className === 'icon_p'){
                    console.log(666);
                    xl = !xl;
                    xhr.open('get','../api/goodslist.php?sort=commentCount' + (xl?'&desc':''),true);
                    xhr.send();
                }
            }
            let jg=true;
            jgmr.onclick =e=>{
                console.log(999);
                if(e.target.className === 'icon_t'){
                    xhr.open('get','../api/goodslist.php?sort=now' + (jg?'&desc':''),true);
                    xhr.send();
                }
            }
            var gk=document.querySelector(".top_f");
          gk.onclick=()=>{
            console.log(666);
  let timer = setInterval(()=>{
          // 计算缓冲速度（差值越大速度越大）
          let speed = window.scrollY/10;
          scrollBy(0,-speed);

          if(window.scrollY <= 0){
            clearInterval(timer);

            // 重置目标值
            scrollTo(0,0);
          }
        },30);

}
let fy=document.querySelector(".sp_ff");
 fy.onclick=e=>{
 if(e.target.className=="liss"){
    let pa=e.target.innerText;
    console.log(pa);
     xhr.open('get','../api/goodslist.php?page='+pa+'&qty=20',true);

            xhr.send();
 }

 }
goodslist.onclick=function(e){
    console.log(e.target.tagName);
  if(e.target.tagName.toLowerCase()=="img"){
    let idx=e.target.parentElement.dataset.id;
    console.log(idx);
    location.href="spqx.html?"+idx;
  }
}
//链接

});
        