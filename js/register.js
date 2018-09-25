$(function(){
 $("#iph_yzm").text(randomCode(6));
$(".w_yzm").text(randomCode(4));
  $("#iph_yzm").click(function(){
    $(this).text(randomCode(6));
  });
  $(".w_yzm").click(function(){
    $(this).text(randomCode(4));
  })
$("#mobile").blur(function(){
if($(this).val()!==""){
 var reg = /\b1[3456789]\d{9}\b/g;
if(reg.test($(this).val())){
$(".ip_b").css("display","none");
var user=$("#mobile").val();
           $.ajax({
            type: 'get',
            url: '../api/guestbook/index.php',
            async: true,
            data:{
            'm':'index',
            'a':'verifyUserName',
            'username':user,
            },
            success:function(str){
            $(".ip_b").css("display","block");
             var data=JSON.parse(str);
             console.log(data);
             if(data.code===0){
                $(".ip_b").text("该手机号可以注册").css("color","green");
             }else{
                $(".ip_b").text("该手机号已被注册").css("color","red");;
             }
              
            }
            
           
  });
          }else{
          $(".ip_b").css("display","block");
          $(".ip_b").children('.wzms').text("请输入正确的11位手机号码");  
          }   
          }else{
            $(".ip_b").css("display","block");
            $(".ip_b").children('.wzms').text("请输入11位手机号码");    
          }
          //

          });
          $("#yzm").blur(function(){
           if($(this).val()!==""){
             if($(this).val()==$("#iph_yzm").text()){
          $(".y_b").css("display","none");
             }else{
          $(".y_b").css("display","block");
          $(".y_b").children('.wzms').text("请输入正确的6位验证码"); 
             }
             return true;
              }else{
          $(".y_b").css("display","block");
          $(".y_b").children('.wzms').text("请输入6位验证码"); 
             }   
          });
          $("#password").blur(function() {
            if($(this).val()!==""){
           var reg = /^[a-zA-Z0-9_]{3,17}[a-zA-Z]{3}$/;
          if(reg.test($(this).val())){
          $(".m_b").css("display","none");

          }else{
          $(".m_b").css("display","block");
          $(".m_b").children('.wzms').text("请输入6-12位数字，字母组合的密码");  
          }   
          }else{
            $(".m_b").css("display","block");
            $(".m_b").children('.wzms').text("请输入6-12位数字，字母组合的密码");    
          }
          });
          $("#pass").blur(function(){
           if($(this).val()==$("#password").val()){
             $(".q_b").css("display","none");
              return true;
           }else{
             $(".q_b").css("display","block"); 
             $(".q_b").children('.wzms').text("二次密码不一致");  
           }
          });
          $("#wyzm").blur(function(){
           if($(this).val()!==""){
             if($(this).val()==$(".w_yzm").text()){
          $(".w_b").css("display","none");
           return true;
             }else{
          $(".w_b").css("display","block");
          $(".w_b").children('.wzms').text("请输入正确的4位验证码"); 
             }
              }else{
          $(".w_b").css("display","block");
          $(".w_b").children('.wzms').text("请输入4位验证码"); 
             }   
          });
          //是否勾选
          var kg=true;
          $("#agree").click(function(){
              if(kg){
                $(this).prop("checked","checked");
              $(this).attr("checked","checked");

                console.log(666);  
            }else{
              $(this).removeAttr('checked');
              console.log(777);
            }
            kg=!kg;
          });
       //注册
          $(".zc").click(function(){
              let pyzm=$("#yzm").val();
              let pmm=$("#pass").val();
              let wyzm=$("#wyzm").val();
            if(pyzm&&pmm&&wyzm!==""){
              if($("#agree").attr("checked")=="checked"){
                  $(".ip_b").text("");
                  var user=$("#mobile").val();
                 var pass=$("#password").val();
                 $.ajax({
                      type: 'post',
                      url: '../api/guestbook/index.php',
                      async: true,
                      data:{
                      'm':'index',
                      'a':'reg',
                      'username':user,
                      'password':pass,
                      },
                      success:function(str){
                       var data=JSON.parse(str);
                       console.log(data);
                       if(data.code===0){
                           location.href="login.html"
                       }else{
                          alert(data.message);
                       }

                      }
                      
                     
            });
              $("#mobile").val("");
             $("#password").val("");
             $("#yzm").val(""); 
             $("#wyzm").val(""); 
              }else{ 
             $(".xy").css("display","block");
            }
              }else {
              $(".ip_b").css("display","block");
            $(".ip_b").children('.wzms').text("请输入11位手机号码"); 
           $(".y_b").css("display","block");
          $(".y_b").children('.wzms').text("请输入6位验证码"); 
          $(".m_b").css("display","block");
          $(".m_b").children('.wzms').text("请输入6-12位数字，字母组合的密码");
          $(".w_b").css("display","block");
            $(".w_b").children('.wzms').text("请输入4位验证码"); 
            }
              
                  
              
          });
          //登陆
          $(".dla").click(function(){
            var user1=$("#username2").val();
              var pas=$("#password2").val();
              let wyzm=$("#wyzm").val();
              if(wyzm!==""){
                   $.ajax({
                  type: 'post',
                  url: '../api/guestbook/index.php',
                  async:true,
                  data: {
                      "m":"index",
                      "a":"login",
                      "username":user1,
                      "password":pas,
                  },
                  success:function(str){
                      console.log(str);
                      var data=JSON.parse(str);
                      console.log(data);
                      if(data.code===0){
                          location.href="../index.html"
                      }else if(data.code===2){
                  $(".ip_b").css("display","block");
                 $(".ip_b").children('.wzms').text(data.message);      
                      }

                  }
              });
              }else{
               $(".w_b").css("display","block");
          $(".w_b").children('.wzms').text("请输入4位验证码"); 
                  }
             
          });



          });


