document.addEventListener("DOMContentLoaded", function(){
            var s1 = new Swiper('.swiper-container', {
                autoplay: { //自动轮播+延时两秒
                    delay:2000,
                    disableOnInteraction:false
                },
                loop: true,//无缝回路轮播
                speed: 500,//切换速度
               
                pagination: {//焦点跟随
                    el: '.swiper-pagination',
                    clickable: true,//点击焦点跳到指定图片
                    renderBullet: function(index, className) {
                        return '<span class="' + className + '"></span>';//生成焦点数字
                    }
                },
                

            });
            
            var oBox=document.getElementById('swiper-container');
            
            oBox.onmouseover=function(){//鼠标经过停止
                s1.autoplay.stop();
            }
            
            oBox.onmouseout=function(){//鼠标经过离开
                s1.autoplay.start();
            }

    var end= '2018-9-22 19:03:30';
    var mai=document.querySelectorAll(".sj");
            ss();
            var tem=setInterval(ss,100);
            function ss(){
                //声明一个变量存放当前的时间
            var start=Date.now();
                //求时间差
            var num=Math.round((Date.parse(end)-start)/1000);
            /*5）倒计时结束时
                        * 停止定时器
                        * 替换购买按钮
                        * 隐藏倒计时*/
               if(num<=0){
                //停止定时器
                clearInterval(tem);
               }
            //3）把差值转换成《剩余时间》
                
              var s=Math.floor(num%60);
              var m=Math.floor(num/60%60);
              var hour = Math.floor(num/60/60)%24;
              var day = Math.floor(num/60/60/24);
              //补0
              s=s<10? "0"+s :s;
              m=m<10? "0"+m :m;
              hour=hour<10? "0"+hour:hour;
              day=day<10? "0"+day:day;
              //4）拼接时间格式，写入页面
              for(i=0;i<mai.length;i++){
                mai[i].innerHTML=day+':'+hour+':'+m+':'+s;
              }
              
            }
     
var gk=document.querySelector(".top_f");
gk.onclick=()=>{
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



});