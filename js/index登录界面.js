const myform=document.querySelector('#myform');
const nameinput=document.querySelector('.Name');
const passwordinput=document.querySelector('.Password');
const msg=document.querySelector('.msg');
var name='lh';
var password=123456;
myform.addEventListener('submit',onSubmit);

function onSubmit(e){
	e.preventDefault();
	
	if(nameinput.value===''||passwordinput.value===''){
	 	alert('请输入用户名和密码');
	}else if(nameinput.value===name||passwordinput.value===password){
		window.location.href='index主界面.html';
		
		
	}else{
		alert('密码或用户名错误');
	}
	
		
}
