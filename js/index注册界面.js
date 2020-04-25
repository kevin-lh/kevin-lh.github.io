//表单验证对象
var formValid={
	//检测用户名
	checkUserName:function(){
		var Name=document.getElementById("Name");
		var nameinfo=document.getElementById("nameinfo");
		var pattern=/^\w{6,}$/;
		if(Name.value.length==0){
			nameinfo.innerHTML="用户名不为空";
			nameinfo.style.color="red";
			return false;
		}
		if(!pattern.test(Name.value)){
			nameinfo.innerHTML="用户名不合法";
			nameinfo.style.color="red";
			return false;
		}else{
			nameinfo.innerHTML="OK";
			nameinfo.style.color="greenyellow";
		}		
	},
	//检测密码
	checkPassword:function(){
		var Pwd=document.getElementById("Pwd");
		var pwdinfo=document.getElementById("pwdinfo");
		var pattern=/^\w{6,10}$/;
		if(Pwd.value.length==0){
			pwdinfo.innerHTML="密码不为空";
			pwdinfo.style.color="red";
			return false;
		}
		if(!pattern.test(Pwd.value)){
			pwdinfo.innerHTML="密码不合法";
			pwdinfo.style.color="red";
			return false;
		}else{
			pwdinfo.innerHTML="OK";
			pwdinfo.style.color="greenyellow";
		}	
	},
	//检测确认密码
	checkConfirmPassword:function(){
		var agPwd=document.getElementById("agPwd");
		var Pwd=document.getElementById("Pwd");
		var agpwdinfo=document.getElementById("agpwdinfo");
		var pattern=/^\w{6,10}$/;
		if(agPwd.value.length==0){
			agpwdinfo.innerHTML="密码不为空";
			agpwdinfo.style.color="red";
			return false;
		}
		if(!pattern.test(agPwd.value)){
			agpwdinfo.innerHTML="密码不合法";
			agpwdinfo.style.color="red";
			return false;
		}else if(Pwd.value!=agPwd.value){
			agpwdinfo.innerHTML="两次输入密码不一致";
			agpwdinfo.style.color="red";			
		}
		else{
			agpwdinfo.innerHTML="OK";
			agpwdinfo.style.color="greenyellow";
		}	
	},
	//检测手机号
	checkPhone:function(){
		var phone=document.getElementById("phone");
		var phoneinfo=document.getElementById("phoneinfo");
		var pattern=/^1[345678]\d{9}$/;
		if(phone.value.length==0){
			phone.innerHTML="手机号不为空";
			phoneinfo.style.color="red";
			return false;
		}
		if(!pattern.test(phone.value)){
			phoneinfo.innerHTML="手机号不合法";
			phoneinfo.style.color="red";
			return false;
		}
		else{
			phoneinfo.innerHTML="OK";
			phoneinfo.style.color="greenyellow";
		}	
		
	}

	
}
