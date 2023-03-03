$(function(){
$(".Registration").show();
$(".down").hover(function() {
    $(".down_load").show();
    console.log(666);
}, function() {
   $(".down_load").hide();  
});
$(".close").click(function(){
    $(".Registration").hide();
})
$(".header_r").hover(function() {
    $(".gwc").show();
}, function() {
    $(".gwc").hide();
});
$(".l_nav ul li").hover(function() {
    $(this).css("background","#fff");
     $(this).children(".a1").css("color","#ce4261");
    $(this).children("a").children(".i_tp").css("color","#ce4261");
    $(this).children(".l_nav_c").css("display","block");
}, function() {
    $(this).css("background","");
    $(this).children(".l_nav_c").css("display","none");
    $(this).children(".a1").css("color","");
    $(this).children(".a1").children(".i_tp").css("color","");

});
$(".l_nav_c ul li").hover(function() {
    $(this).children("a").css("background","#94193f");
    $(this).children("a").children("i").css("background","#94193f");
}, function(){
     $(this).children("a").css("background","#9b9093");
     $(this).children("a").children("i").css("background","#837679");
});
$(".hot ul li").hover(function() {
    $(this).css("border","2px solid #94193f ");
    $(this).children('p').css("text-decoration","underline");

}, function() {
    $(this).css("border","2px solid #fff ");
    $(this).children('p').css("text-decoration","none");
});
$(".hot").hover(function() {
    $(".hd").show();
    $(".hdd").show();
}, function() {
   $(".hd").hide();
   $(".hdd").hide();
});
$(".hd").click(function(){
    $(".hot ul").animate({left:0},2000,'linear');
});
$(".hdd").click(function(){
    $(".hot ul").animate({left:-970},2000,'linear');
});
$(".zb").click(function(){
 $(".zb").addClass('bo');
 $(".fq").removeClass('bo');
 $(".live_streaming").css("opacity","1");
 $(".snap_up").css("opacity","0");
});
$(".fq").click(function(){
 $(".fq").addClass('bo');
 $(".zb").removeClass('bo');
 $(".live_streaming").css("opacity","0");
 $(".snap_up").css("opacity","1");
});
for(i=0;i<$(".snap_up ul li").length;i++){
 $(".snap_up ul li").eq(i).children(".kk").html(i+1); 
};
$(".flash_c").hover(function() {
    $(".op").css("display","block");
    $(".opd").css("display","block");
}, function() {
    $(".op").css("display","none");
    $(".opd").css("display","none")
});
$(".op").click(function(){
    $(".f_coul").animate({left:0},2000,'linear');
});
$(".opd").click(function(){
    $(".f_coul").animate({left:-1025},2000,'linear');
    console.log(666);
});
$(".f_co").eq(0).css("display","block");
$(".tttt li").mouseenter(function() {
    let idx=$(this).index();
    console.log(idx);
    $(".tttt li").removeClass('ac');
    $(this).addClass('ac');
    $(".f_co").css("display","none");
    $(".f_co").eq(idx).css("display","block");
});
$(".f_co ul li").hover(function() {
    $(this).children(".tp").css("opacity","0.5")
}, function() {
  $(this).children(".tp").css("opacity","1")
});
$(".hyp").click(function(){
$('.news').animate({left:-1020},2000,'linear');
});
$(".change").click(function(){
 $('.news').animate({left:0},2000,'linear');   
});
$(".news li").hover(function() {
    $(this).css("border","2px solid #982247");
}, function(){
    $(this).css("border","2px solid #fff");
});
$(".spls li").hover(function() {
    if($(this).index()==0){
      $(this).css("border","2px solid #fff");  
    }else{
      $(this).css("border","2px solid #982247");  
    }
    
}, function() {
     $(this).css("border","2px solid #fff");
});
$(".spl .spls").eq(0).css("display","block");
$(".beauty_makeup .b_top .bul li").mouseenter(function() {
    $(".beauty_makeup .b_top .bul li").removeClass('activeli');
    $(this).addClass('activeli');
    let ind=$(this).index();
     $(".spl .spls").css("display","none");
    $(".spl .spls").eq(ind).css("display","block");
    });
$(".fspl .fspls").eq(0).css("display","block");
$(".food_health .f_top .ful li").mouseenter(function() {
    $(".food_health .f_top .ful li").removeClass('activeli');
    $(this).addClass('activeli');
    let ind=$(this).index();
     $(".fspl .fspls").css("display","none");
    $(".fspl .fspls").eq(ind).css("display","block");
    });
$(".fspls li").hover(function() {
    if($(this).index()==0){
      $(this).css("border","2px solid #fff");  
    }else{
      $(this).css("border","2px solid #982247");  
    }
    
}, function() {
     $(this).css("border","2px solid #fff");
});
$(".espl .espls").eq(0).css("display","block");
$(".eat .e_top .eul li").mouseenter(function() {
   $(".eat .e_top .eul li").removeClass('activeli');
    $(this).addClass('activeli');
    let ind=$(this).index();
     $(".espl .espls").css("display","none");
    $(".espl .espls").eq(ind).css("display","block");
    });
$(".espls li").hover(function() {
    if($(this).index()==0){
      $(this).css("border","2px solid #fff");  
    }else{
      $(this).css("border","2px solid #982247");  
    }
    
}, function() {
     $(this).css("border","2px solid #fff");
});
$(".gspl .gspls").eq(0).css("display","block");
$(".garment .g_top .gul li").mouseenter(function() {
   $(".garment .g_top .gul li").removeClass('activeli');
    $(this).addClass('activeli');
    let ind=$(this).index();
     $(".gspl .gspls").css("display","none");
    $(".gspl .gspls").eq(ind).css("display","block");
    });
$(".gspls li").hover(function() {
    if($(this).index()==0){
      $(this).css("border","2px solid #fff");  
    }else{
      $(this).css("border","2px solid #982247");  
    }
    
}, function() {
     $(this).css("border","2px solid #fff");
});
$(".faspl .faspls").eq(0).css("display","block");
$(".fabric .fa_top .faul li").mouseenter(function() {
   $(".fabric .fa_top .faul li").removeClass('activeli');
    $(this).addClass('activeli');
    let ind=$(this).index();
     $(".faspl .faspls").css("display","none");
    $(".faspl .faspls").eq(ind).css("display","block");
    });
$(".faspls li").hover(function() {
    if($(this).index()==0){
      $(this).css("border","2px solid #fff");  
    }else{
      $(this).css("border","2px solid #982247");  
    }
    
}, function() {
     $(this).css("border","2px solid #fff");
});
$(".apspl .apspls").eq(0).css("display","block");
$(".appliance .ap_top .apul li").mouseenter(function() {
   $(".appliance .ap_top .apul li").removeClass('activeli');
    $(this).addClass('activeli');
    let ind=$(this).index();
     $(".apspl .apspls").css("display","none");
    $(".apspl .apspls").eq(ind).css("display","block");
    });
$(".apspls li").hover(function() {
    if($(this).index()==0){
      $(this).css("border","2px solid #fff");  
    }else{
      $(this).css("border","2px solid #982247");  
    }
    
}, function() {
     $(this).css("border","2px solid #fff");
});
$(".subnav ul li a").click(function(){
 $(".subnav ul li a").removeClass('atz')   
 $(this).addClass('atz');

 }) ; 
    $(window).scroll(function(){
    if($(window).scrollTop()>=680){
        $(".top_box").css("display","block");
        }else if($(window).scrollTop()<680){
           $(".top_box").css("display","none");   
        }
       if($(window).scrollTop()>=900){
         $(".subnav").css("display","block");
         let ig=$(window).scrollTop();
         console.log(ig);
         if(ig%700==0){
          let hjk=ig/700;
          console.log(666);
          $(".subnav ul li a").removeClass('atz');
          $(".subnav ul li a").eq(hjk-1).addClass('atz'); 
         }
        }else if($(window).scrollTop()<900){
           $(".subnav").css("display","none");   
        }
    });
// $(".btp").css("display","block");
$(".btp_a").addClass('hove_a');
  $(".btp_a").hover(function() {
      $(".btp").css("display","block");
       $(".btp_a").addClass('hove_a');
  }, function() {
       $(".btp").css("display","none");
       $(".btp_a").removeClass('hove_a')
  });
  // $(".gkk").hover(function() {
  //     $(".top5_sm").css("display","block");
  // }, function() {
  //      $(".top5_sm").css("display","none");
  // });     
yhm();
//用户名读取
function yhm(){
  var uid=Cookie.get("uid");
  var name=Cookie.get("username");
    if(uid>=1){
   let btn=$("<button class="+"btn1"+">退出</button>");
   $(".top_nav_l ul").text("欢迎您,"+name).append(btn).addClass('yhml')
    }
}
 
//用户退出
    $(".btn1").click(function(){
       $.ajax({
        type: 'post',
        url: 'api/guestbook/index.php',
        async:true,
        data: {
        'm' : 'index',
        'a' : 'logout', 
        },
        success:function(str){
          
          console.log(str);
          var data=JSON.parse(str);
          console.log(data);
          if(data.code===0){
            location.reload();
          }else{
              alert(data.message);
          }
        }
       })
       
    });




});
