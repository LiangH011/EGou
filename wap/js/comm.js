$(document).ready(function(){
	/*****************帮助中心*********************/
	$("#help .help-nav li").eq(0).addClass("helpnavStyle");
	$("#help .news-content>ul").eq(0).show().siblings().hide();
	$("#help .help-nav li").click(function(){
		$(this).addClass("helpnavStyle").siblings().removeClass("helpnavStyle");
		var count=$(this).index();
		$("#help .news-content>ul").eq(count).show().siblings().hide();
	})
	
	/********************充值中心**********************/
	$("#chongzhi .cz-nav li").eq(0).css("border-bottom","1px solid #FF3451");
	$("#chongzhi .cz-content>ul").eq(0).show().siblings().hide();
	$("#chongzhi .cz-nav li").click(function(){
		$(this).css("border-bottom","1px solid #FF3451").siblings().css("border","none");
		var count=$(this).index();
		$("#chongzhi .cz-content>ul").eq(count).show().siblings().hide();
	})
	
	$("#chongzhi .zffs-nav li").eq(0).css("border-bottom","1px solid #FF3451");
	$("#chongzhi .zffs-content>div").eq(0).show().siblings().hide();
	$("#chongzhi .zffs-nav li").click(function(){
		$(this).css("border-bottom","1px solid #FF3451").siblings().css("border","none");
		var count=$(this).index();
		$("#chongzhi .zffs-content>div").eq(count).show().siblings().hide();
	})
	
	
	/*****************商城订单*********************/
	$("#order .order-nav li").eq(0).addClass("ordernavStyle");
	$("#order .order-nav li").click(function(){
		$(this).addClass("ordernavStyle").siblings().removeClass("ordernavStyle");
	})
	
	/********************超级返利**************************/
	$("#fanli .sub-nav a").eq(0).css({"background":"#FF3451","color":"#fff"});
	$("#fanli .sub-nav").width($("#fanli .fl-nav").width());
	$("#fanli .sub-nav").hide();
	
	$("#fanli .fl-nav li").click(function(){
		if($(this).children(".sub-nav").is(":visible"))
		{
			$(this).children("span").children(".blnav-arrow").removeClass("subNavArrow");
			$(this).children(".sub-nav").hide();
		}
		else{
			$(this).children("span").children(".blnav-arrow").addClass("subNavArrow");
			$(this).children(".sub-nav").show();
			
		}
	})
	
	/********************优惠爆料**************************/
	$("#baoliao .sub-nav a").eq(0).css({"background":"#FF3451","color":"#fff"});
	$("#baoliao .sub-nav").width($("#baoliao .bl-nav").width());
	$("#baoliao .sub-nav").hide();
	
	$("#baoliao .bl-nav li").click(function(){
		if($(this).children(".sub-nav").is(":visible"))
		{
			$(this).children("span").children(".blnav-arrow").removeClass("subNavArrow");
			$(this).children(".sub-nav").hide();
		}
		else{
			$(this).children("span").children(".blnav-arrow").addClass("subNavArrow");
			$(this).children(".sub-nav").show();
			
		}
	})
	
	
	
	/******************登录注册*************************/
	var RegName=/^[0-9a-zA-Z\u4e00-\u9fa5_]{2,15}$/;
	var RegPwd=/^[0-9a-zA-Z]{6,20}$/;
	var RegEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var RegPhone=/^1[34578]\d{9}$/;
	var RegQQ=/^[1-9]{1}[0-9]{3,13}$/;
	
	/**************登陆*********/
	var stateLogin1=false;
	var stateLogin2=false;
	var stateLogin3=false;
	//账号
	$("#login-form .username").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var name=$(this).val();
		if(RegName.test(name) || RegEmail.test(name) || RegPhone.test(name))
		{
			stateLogin1=true;
			$(this).siblings(".errorTip").hide();

		}
		else
		{
			$(this).siblings(".errorTip").show();
			
		}
	})
	
	//密码
	$("#login-form .pwd").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var pwd=$(this).val();
		if(!RegPwd.test(pwd))
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateLogin2=true;
			$(this).siblings(".errorTip").hide();

		}
	})
	
	//验证码
	$("#login-form .varilfy").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var varilfy=$(this).val().toLocaleLowerCase();
		var yz=$("#login-form .yzm").text().toLocaleLowerCase();
		if(varilfy!=yz)
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateLogin3=true;
			$(this).siblings(".errorTip").hide();
		}
	})
	
	$("#login-form .login-btn").click(function(){
		if(stateLogin1 &&　stateLogin2 && stateLogin3)
		{
			$("#login-form").submit();
		}
		else
		{
			$("#login-form .username").siblings(".errorTip").show();
			return false;
		}
	})
	
	
	/**************注册*********/
	var stateRegist1=false;
	var stateRegist2=false;
	var stateRegist3=false;
	var stateRegist4=false;
	var stateRegist5=false;
	var stateRegist6=false;
	
	//账号
	$("#register-form .username").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var name=$(this).val();
		if(RegName.test(name))
		{
			stateRegist1=true;
			$(this).siblings(".errorTip").hide();

		}
		else
		{
			$(this).siblings(".errorTip").show();
			
		}
	})
	
	//密码
	var pwd;
	$("#register-form .pwd").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		pwd=$(this).val();
		if(!RegPwd.test(pwd))
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateRegist2=true;
			$(this).siblings(".errorTip").hide();

		}
	})
	
	//确认密码
	$("#register-form .rePwd").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var rePwd=$(this).val();
		if(rePwd!=pwd)
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateRegist3=true;
			$(this).siblings(".errorTip").hide();

		}
	})
	
	//邮箱
	$("#register-form .mail").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var mail=$(this).val();
		if(!RegEmail.test(mail))
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateRegist4=true;
			$(this).siblings(".errorTip").hide();

		}
	})
	
	//qq号
	$("#register-form .qqNum").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var qqNum=$(this).val();
		if(!RegQQ.test(qqNum))
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateRegist5=true;
			$(this).siblings(".errorTip").hide();

		}
	})
	
	//手机号
	$("#register-form .phone").focus(function(){
		$(this).siblings(".errorTip").hide();
	})
	.blur(function(){
		var phone=$(this).val();
		if(!RegPhone.test(phone))
		{
			$(this).siblings(".errorTip").show();
		}
		else
		{
			stateRegist6=true;
			$(this).siblings(".errorTip").hide();

		}
	})
	
	$("#register-form .regidter-btn").click(function(){
		if(stateRegist1 &&　stateRegist2 && stateRegist3 && stateRegist4 && stateRegist5 && stateRegist6)
		{
			$("#register-form").submit();
		}
		else
		{
			$("#register-form.username").siblings(".errorTip").show();
			return false;
		}
	})
	
	
	//验证码
	function creat_code(){
		var arr=['1','r','Q','4','S','6','w','u','D','I','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',  
                 'q','2','s','t','8','v','7','x','y','z','A','B','C','9','E','F','G','H','0','J','K','L','M','N','O','P','3','R',  
                 '5','T','U','V','W','X','Y','Z'];
 		return arr.sort(function(){
 			return (Math.random()-.5);
 		})
	}
	creat_code();
	
	function show_code(){
		var str="";
		var code=creat_code();
		for(var i=0;i<6;i++)
		{
			str+=code[i];
		}
		$("#login-form .yzm").text(str);
	}
	show_code();
	
	$("#login-form .yzm").click(function(){
		show_code();
	})
	
	
	
})