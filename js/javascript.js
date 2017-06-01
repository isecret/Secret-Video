function start(){
	if($('input').val() != ""){
		var url = "http://www.wmxz.wang/admin.php?url="+$('input').val();
        layui.use('layer', function(){
			  layer.open({
			  type: 2
			  ,title: "视频播放器"
              ,scrollbar: false
			  ,area: ['700px','550px']
			  ,content: url
			}); 
		});
	}else{
    	msg();
    }
}
function show(){
  	layui.use('layer', function(){
    	var index = layer.open({
  			title:'一路陪伴，请捐助我'
  			,content: '<span style="display:block;text-align:center;font-size:20px;">支付宝扫一扫</span><img style="display:block;margin:0 auto;height:200px;width:200px;" src="http://v.isecret.vip/images/juanzhu.jpg"><span style="display:block;font-size:14px;text-align:center;margin-top:10px;">不捐助也可播放，感谢捐助</span>'
  			,area: '220px'
          	,scrollbar: false
          	,btn: ['直接播放']
          	,btnAlign: 'c'
  			,yes: function(index, layero){
              	layer.close(index);
   				start();
  			}
		});
    });
}

function msg(){
  	layui.use('layer', function(){
    	layer.msg('播放地址不能为空！',{icon: 2});
    });
}

function urlPass(){
	strRegex="^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$"; 
	
}
