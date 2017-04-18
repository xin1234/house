$(function(){
    'use strict';
    //鼠标移动到上面出现下拉框
    $(".sec").mouseover(function(){
        $(".city").fadeIn();
    })
    $(".sec").mouseleave(function(){
        $(".city").fadeOut();
    })
    
    
    
        var zz = /^1[34578]\d{9}$/;
        var nums = null;
        $(".pinp").on("blur",function() {
            nums = $(".pinp").val();
            if (nums == '' || !zz.test(nums)) {
                $(".phone .icons").show();
                $(".phone .icons1").hide();
            }else {
                $(".phone .icons").hide();
                $(".phone .icons1").show();
            }
    })
        
    //val值的拼接
     $("body").on("input change", function(){
		 var a = $(".inp").val();
         var b = $("#ae").find('option:selected').val();
         var c = $("#md").find('option:selected').val();
         var d = $(".rinp").val();
         var e = $(".rinp1").val();
         var f = $(".rinp2").val();
         var g = $(".rinp3").val();
         
         var h = $("input:radio:checked").val();
         var i = $("#choose").find('option:selected').val();
         var j = $("#choose1").find('option:selected').val();
         var k=  $(".hinp").val();
         var l = $(".minp").val();
         var m = $(".pinp").val();
         var arr=new Array(); 
         $("input[name=ng]:checked").each(function(key,value){
            arr[key]=$(value).val();
         })
         var val = a+b+c+d+e+f+g+h+i+j+k+l+arr+m;
		 $("#textarea").text(val);
	 })
    
     //必须选择不能为空
     $("#ae,#md").on("change",function(){
         var val1=$("#ae").find('option:selected').text()=="区属" || $("#md").find('option:selected').text()=="板块";
         if(val1){
             $(".area .icons").show();
             $(".area .icons1").hide();
         }else{
            $(".area .icons").hide();
             $(".area .icons1").show();
         }
     })
     
      $("#choose,#choose1").on("change",function(){
         var val2=$("#choose").find('option:selected').text()=="选择卧室内容" || $("#choose1").find('option:selected').text()=="选择卧室内容";
         if(val2){
             $(".style .icons").show();
             $(".style .icons1").hide();
         }else{
            $(".style .icons").hide();
             $(".style .icons1").show();
         }
     })
      
      //不能为空且必须为中文
    var zz1 = /^[\u4e00-\u9fa5]*$/;
    var val;
     $(".inp").on("blur",function(){
         val = $(".inp").val();
         if(val == ''  || !zz1.test(val)){
             $(".vname .icons").show();
             $(".vname .icons1").hide();
         }else{
             $(".vname .icons").hide();
             $(".vname .icons1").show();
         }
     })
     
     
     //不能为空且必须大于0
    var zz2 = /^[1-9]d*|0$/;
    $(".rinp,.rinp1,.rinp2,.rinp3").on("blur",function(){
        var rm = $(".rinp").val();
        var rm1 = $(".rinp1").val();
        var rm2 = $(".rinp2").val();
        var rm3 = $(".rinp3").val();
        var rms = rm + rm1 + rm2 + rm3;
        if(rms == '' ||  rms<= 0 || !zz2.test(rm) ||!zz2.test(rm1) ||!zz2.test(rm2) || !zz2.test(rm3)){
            $(".model .icons").show();
            $(".model .icons1").hide();
        }else{
            $(".model .icons").hide();
            $(".model .icons1").show();
        }
     })
    
    //不能为空切大于0
    var zz3 = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    $(".hinp").on("blur",function(){
        var hinp = $(".hinp").val();
        if(hinp == '' || !zz3.test(hinp)){
            $(".harea .icons").show();
            $(".harea .icons1").hide();
        }else{
            $(".harea .icons").hide();
            $(".harea .icons1").show();
        }
    })
    $(".minp").on("blur",function(){
        var minp = $(".minp").val();
        if(minp == '' || !zz3.test(minp)){
            $(".rmoney .icons").show();
            $(".rmoney .icons1").hide();
        }else{
            $(".rmoney .icons").hide();
            $(".rmoney .icons1").show();
        } 
    })
    
    
  //checkbox4被选中其他的不能选
    $(".checkbox4").change(function(){
        if($(this).is(':checked')){
            $(this).siblings().attr('disabled','disabled').removeAttr("checked");
        }
        else {
            $(this).siblings().removeAttr('disabled','disabled');
        }
    })
    $("input[name=ng]").change(function(){
        if($("input[name=ng]").is(':checked')){
            $(".payment .icons").hide();
            $(".payment .icons1").show();
        }else{
            $(".payment .icons").show();
            $(".payment .icons1").hide();
        }
    })
   
    
    //模糊查询
    var data= ['弓箭坊','弓箭坊小区','弓箭坊高层住宅小区','中华路幼儿园（弓箭坊）','弓箭坊-道路'];
//input框的事件
    $(".inp").on('input',function(){
        //获取input框的值
        var keyword = $(this).val();
        //有值的时候去查找数据
        if(keyword){
            var str;
            var arr = [];
            for(var i=0;i<data.length;i++){
                var objStr = data[i];
                //js原生的indexOf方法返回的都是指定的子串在另一个字符串中的位置，如果没有找不到子串，则返回 -1
                var str = objStr.indexOf(keyword);
                if(str>=0){
                    $(".think").show();
                    arr[i] = '<div class=think1'+i+'>'+objStr+'</div>';
                }
                //给动态添加的数据绑定 鼠标移入事件 给它添加背景色
                $(".think").on('mouseover','.think1'+i,function(){
                    $(this).css({'background-color':'#f2f2f2'});
                });
                //给动态添加的数据绑定 鼠标点击事件 让它写入到class为inp的input框里
                $(".think").on("click",'.think1'+i,function(){
                    var text = $(this).text();
                    $(".inp").val(text);
                    $(".think").hide();
                });
                //给动态添加的数据绑定 鼠标移出事件 取消它的背景色
                $(".think").on('mouseout','.think1'+i,function(){
                    $(this).css({'background-color':'#fff'});
                });
                
                $("body").on("click",function(){
                    $(".think").html("").hide();
                })
            }
            $(".think").html(arr);
        }
    });
    
    
    //模拟图片上传
    $(".file").on("click",function(){
        var file = $(".file-input").val();
        $("img").attr("src",'images/logo1.png');
        $(".image").show();
        $(".file").hide();
    })
    
    $(".c").on("click",function(){
        $(".image").hide();
        $(".file").show();
    })

});