$(function(){
    $(".btn1").click(function(){
       $.ajax({
        type: 'post',
        url: '../api/guestbook/index.php',
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