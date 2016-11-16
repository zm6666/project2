var hx=document.getElementById('hx');
var hx2=document.getElementById('hx2');
var like=document.getElementById('like');
hx.onclick=function (){
	hx2.style.display='block';
	like.innerHTML='喜欢';

}
hx2.onclick=function (){
	hx2.style.display='none';
	like.innerHTML='不喜欢';
}

//大图滚动
var outer=document.getElementById('outer');
var inner=document.getElementById('inner');
var uls=inner.getElementsByTagName('ul');
var firstimg=inner.children[0].cloneNode(true);
var lastimg=inner.children[uls.length-1].cloneNode(true);
inner.appendChild(firstimg);
inner.insertBefore(lastimg,inner.children[0]);
outer.scrollLeft=uls[0].offsetWidth;
var a=1;
var time1=null,time2=null;
function automove () {
	clearInterval(time1);
	time1=setInterval(function (){
		a++;
		if (a>=uls.length) {
			a=2;
			outer.scrollLeft=uls[0].offsetWidth;
		};
		move();
	},3000)
}
automove();
function move () {
	var start=outer.scrollLeft;
	var end=uls[0].offsetWidth*a;
	var change=end-start;
	var minsetp=0;
	var maxsetp=20;
	var everystep=change/maxsetp;
	clearInterval(time2);
	time2=setInterval(function (){
		minsetp++;
		if (minsetp>=maxsetp) {
			clearInterval(time2);
		};
		start+=everystep;
		outer.scrollLeft=start;
	},20)
}
lft.onclick=function (){
	a--;
	if (a<0) {
		a=uls.length-3;
		outer.scrollLeft=uls[0].offsetWidth*(a+1);
	};
	move();
	automove();
}
rgt.onclick=function (){
	a++;
	if (a>=uls.length) {
		a=2;
		outer.scrollLeft=uls[0].offsetWidth;
	};
	move();
	automove();
}










//发布
function byclass3(classn){
		var tags=document.all ? document.all : document.getElementsByTagName('*');
		var arr=[];
		var reg=new RegExp('\\b'+classn+'\\b','g');
		for (var i = 0; i < tags.length; i++) {
			reg.lastIndex=0;
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
var more=document.getElementById('more');
var gdpl=byclass3('cont_5_b3')[0];
var flag=true;
more.onclick=function (ev){
	var e=ev||window.event;
	if (e.preventDefault) {
		e.preventDefault();
	} else{
		e.returnValue=false;
	};
	if (flag==true) {
		gdpl.style.display='none';
		more.innerHTML='更多>';
		flag=false
	} else{
		gdpl.style.display='block';
		more.innerHTML='收起>';
		flag=true
	};
	
}
//输入框出现
var srk=document.getElementById('cont_5_b3_b');
var hf=document.getElementById('hf');
hf.onclick=function (){
	srk.style.display='block';
}

//发布内容(节点获取)
// var nul=document.getElementById('null');
// var list=document.getElementById('list');
// var ipt3=document.getElementById('ipt3');
// var sz2=document.getElementById('sz2');
// var pl=document.getElementById('pl');
// var ul=byclass3('cont_5_b3')[0];
// var lis=ul.children;

// pl.onclick=function (){
// 	if (ipt3.value.length>200) {
// 		ipt3.value=ipt3.value.substring(0,200);
// 	};
// 	var newli=document.createElement('li');
// 	newli.innerHTML=lis[1].innerHTML;
// 	if (ipt3.value=='') {
// 		nul.style.display='block';
// 	} else{
// 		nul.style.display='none';
// 		list.appendChild(newli);
// 		ipt3.value='';
// 		sz2.innerHTML='200';
// 		var del=byclass3('del');
// 		console.log(del.length);
// 		for (var i = 0; i < del.length; i++) {
// 			del[i].onclick=function (){
// 				// removeElement(this.del.parentNode);
// 				list.removeChild(this.parentNode.parentNode.parentNode);
// 			}
// 		};
// 	}
// }
// var time3=null;
// ipt3.onfocus=function (){
// 	time3=setInterval(function (){
// 		var len=ipt3.value.length;
// 		var sy=200-len;
// 		if (sy<=0) {
// 			sz2.style.color='red';
// 		};
// 		sz2.innerHTML=sy;
// 	},1)
// }
// ipt3.onblur=function (){
// 	clearInterval(time3);
// }

//发布内容(改变内容)
var nul=document.getElementById('null');
var sz2=document.getElementById('sz2');
var list=document.getElementById('list');
var ipt3=document.getElementById('ipt3');
var pl=document.getElementById('pl');
var now=new Date();
var year=now.getFullYear();
var mon=now.getMonth();
var date=now.getDate();
var hour=now.getHours();
var min=now.getMinutes();
// var time=year+mon+date+hour+min;
pl.onclick=function (){
	if (ipt3.value.length>200) {
		ipt3.value=ipt3.value.substring(0,200);
	};
	var newli=document.createElement('li');
	newli.innerHTML='<div class="list_l"><img src="images/tx2.jpg" alt=""><p>时尚旅游</p></div><div class="list_r"><p class="hfr">时尚旅游<em>回复</em>闪烁尾戒</p><p class="hfnr">'+ipt3.value+'</p><p class="hfsc">'+year+'-'+mon+'-'+date+'&nbsp;'+hour+':'+min+'<em>回复</em><em class="del">删除</em></p></div>';
	if (ipt3.value=='') {
		nul.style.display='block';
	} else{
		nul.style.display='none';
		list.appendChild(newli);
		ipt3.value='';
		sz2.innerHTML='200';
		var del=byclass3('del');
		for (var i = 0; i < del.length; i++) {
			del[i].onclick=function (){
				list.removeChild(this.parentNode.parentNode.parentNode);
			}
		};
	};
}
var time3=null;
ipt3.onfocus=function (){
	time3=setInterval(function (){
		var len=ipt3.value.length;
		var sy=200-len;
		if (sy<=0) {
			sz2.style.color='red';
		}
		sz2.innerHTML=sy;
	},1)
}
ipt3.onblur=function (){
	clearInterval(time3);
}

//cookie


var user=document.getElementById('user');
var pass=document.getElementById('pass');
var rem=document.getElementById('rem');
var sub=document.getElementById('sub');

function setcookie (key,value,days) {
	var date=new Date();
	date.setDate(date.getDate()+days);
	document.cookie=key+"="+escape(value)+"; expires="+date;
}
function getcookie (key) {
	var arr=document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var arr1=arr[i].split('=');
		if (arr1[0]==key) {
			return unescape(arr1[1]);
		};
	};
	return false;
}
function removecookie (key) {
	setcookie(key,'0',-1);
}


//发布登录框
var dl=document.getElementById('dl');
var dlk=document.getElementById('dlk');
var btn=document.getElementById('btn');
dl.onclick=function (){
	dlk.style.display='block';
}
btn.onclick=function (){
	dlk.style.display='none';
}
if (getcookie('pass')) {
	user.value=getcookie('user');
	pass.value=getcookie('pass');
	rem.checked=true;
};
sub.onclick=function (){
	if (user.value==''||pass.value=='') {
		alert('账号或密码不能为空');
		return false;
	} else{
		alert('登录成功');
		dlk.style.display='none';
	};
	if (rem.checked) {
		setcookie('user',user.value,30);
		setcookie('pass',pass.value,30);
	} else{
		user.value='';
		pass.value='';
		removecookie('pass');
		rem.checked=false;
	};
}
