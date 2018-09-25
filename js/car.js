$(function() {
     function cg(goodslist,a){
        var da=new Date();
       da.setDate(da.getDate()+7);
         for(i=0;i<goodslist.length;i++){
                    if(goodslist[i].guid===a.parent().parent().attr("data-guid")){
                      goodslist[i].qity= a.parent().children().eq(1).val();
                      break;
                    }
                  }
             
             document.cookie="goodslist="+JSON.stringify(goodslist)+";expires="+da.toUTCString()+";Path="+escape('/');
      }
    $('.splist').on('click', '.spj', function() {
        var val = $(this).prev().val();
        val++;
        $(this).prev().val(val);
         var goodslist=Cookie.get("goodslist");
                goodslist=JSON.parse(goodslist);
          cg(goodslist,$(this));
        price($(this));
        var arr=checknum();
        allnum(arr);
        allprice(arr);
    });

    //减数量
    $('.splist').on('click', '.spjc', function() {
        var val = $(this).next().val();
        val--;
        if(val <= 1) {
            val = 1;
        }
        $(this).next().val(val);
       var goodslist=Cookie.get("goodslist");
       goodslist=JSON.parse(goodslist);
          cg(goodslist,$(this));
        price($(this));
        var arr=checknum();
        allnum(arr);
        allprice(arr);
    });

    //小计
    function price(now) {
        var pri = now.parent().prev().text();
        pri = $.trim(pri);
        pri = pri.substring(2);
        var num = now.parent().find('input').val();
        var all = pri * num;

        console.log(pri + '~' + num);

        now.parent().next().html('￥&nbsp;' + all);
    }

    //删除单行
    $('.splist').on('click', '.btn-close', function() {
    if($(this).parent().children().eq(0).prop("checked")){
    $(this).parent().remove();
    var goodslist=Cookie.get("goodslist");
    goodslist=JSON.parse(goodslist);
    var da=new Date();
       da.setDate(da.getDate()+7);
         for(i=0;i<goodslist.length;i++){
                    if(goodslist[i].guid===$(this).parent().attr("data-guid")){
                    goodslist.splice(i,1);
                      break;
                    }
                  }
             
             document.cookie="goodslist="+JSON.stringify(goodslist)+";expires="+da.toUTCString()+";Path="+escape('/');
     
    }
    


        update();
        var arr=checknum();
        allnum(arr);
        allprice(arr);
    });

    function update() {
        if($('.spj').size() == 0) {
            $('#del').remove();
        }
    }

    //全选
    var ischecked = true;
    $('.gx3').on('click', function() {

        //prop() 添加属性(行为的)  attr（）添加属性 
        if(ischecked) {
            $('.gx3').prop('checked', 'checked');
            $('.gx2').prop('checked', 'checked');
        } else {
            $('.gx3').removeAttr('checked');
            $('.gx2').removeAttr('checked');
        }
        ischecked = !ischecked;
        var arr=checknum();
        //总数量
        allnum(arr);
        //总价格
        allprice(arr);
    });

    
    //勾选的数量
    function checknum(){
        var arr = [];
        var le = $('.gx2').size();
        for(var i = 0; i < le; i++) {
            if($('.gx2').eq(i).prop('checked')) {
                arr.push(i);
            }
        }
        return arr;
    }

    //全选补充
    $('.splist').on('click','.gx2',function(){
        var arr=checknum();//被勾选的
        if(arr.length==$('.gx2').size()){
            $('.gx3').prop('checked', 'checked');
        }
        else{
            $('.gx3').removeAttr('checked');
        }
        
        //总数量
        allnum(arr);
        //总价格
        allprice(arr);
    });
    
    //数量
    function allnum(arr){
        var num=0;
        for(var i=0;i<arr.length;i++){
            num+=parseInt($('.srk').eq(arr[i]).val());
        }
        $('.sp2').html(arr.length);
//      console.log(123);
    }
    
    function allprice(arr){
        var price=0;
        for(var i=0;i<arr.length;i++){
            var nowpri=$('.price').eq(arr[i]).text();
            nowpri= (nowpri);
            nowpri=nowpri.substring(2);
            price+=parseInt(nowpri);
        }
        $('.sp3').html(price);
    }
    
    
    
});