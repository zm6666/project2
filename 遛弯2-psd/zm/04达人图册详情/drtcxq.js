var outer=document.getElementById('outer');
var inner=document.getElementById('inner');
var imgs=inner.getElementsByTagName('img');
var bk=document.getElementById('bk');
var lis=bk.getElementsByTagName('li');
var con=document.getElementById('con_b_l_t');

var firstimg=inner.children[0].cloneNode(true);
var lastimg=inner.children[imgs.length-1].cloneNode(true);
inner.appendChild(firstimg);
inner.insertBefore(lastimg,inner.children[0]);

outer.scrollLeft=imgs[0].offsetWidth;
var time1=null,time2=null;
var a=1,b=0;

function automove () {
	clearInterval(time1);
	time1=setInterval(function (){
		a++;
		if (a>=imgs.length) {
			a=2;
			outer.scrollLeft=imgs[0].offsetWidth;
		};
		b++;
		if (b>=lis.length) {
			b=0;
		};
		move();
	},4000)
}
automove();
function move () {
	var start=outer.scrollLeft;
	var end=imgs[0].offsetWidth*a;
	var change=end-start;
	var minsetp=0;
	var maxsetp=50;
	var everystep=change/maxsetp;
	clearInterval(time2);
	time2=setInterval(function (){
		minsetp++;
		if (minsetp>=maxsetp) {
			clearInterval(time2);
		};
		start+=everystep;
		outer.scrollLeft=start;
	},10)
	for (var i = 0; i < lis.length; i++) {
		lis[i].className='';
	};
	lis[b].className='show';
}
lft.onclick=function (){
	a--;
	if (a<0) {
		a=imgs.length-3;
		outer.scrollLeft=imgs[0].offsetWidth*(a+1);
	};
	b--;
	if (b<0) {
		b=lis.length-1;
	};
	move();
	automove();
}
rgt.onclick=function (){
	a++;
	if (a>=imgs.length) {
		a=2;
		outer.scrollLeft=imgs[0].offsetWidth;
	};
	b++;
	if (b>=lis.length) {
		b=0;
	};
	move();
	automove();
}
con.onmouseover=function (){
	lft.style.display='block';
	rgt.style.display='block';
}
con.onmouseout=function (){
	lft.style.display='none';
	rgt.style.display='none';
}



var dl=document.getElementById('dl');
var dlk=document.getElementById('dlk');
var sub=document.getElementById('sub');
dl.onclick=function (){
	dlk.style.display='block';
}
sub.onclick=function (){
	alert('登录成功');
	dlk.style.display='none';
}







var ipt2=document.getElementById('ipt2');
var va=document.getElementById('va');
var btn2=document.getElementById('btn2');
// var con_b_l_b2=document.getElementById('con_b_l_b2');
// var ul=con_b_l_b2.getElementsByTagName('ul')[0];
var list=document.getElementById('list');
var tc=document.getElementById('tc');
var now=new Date();
var year=now.getFullYear();
var mon=now.getMonth();
var date=now.getDate();
var hour=now.getHours();
var min=now.getMinutes();
btn2.onclick=function (){
	if (ipt2.value.length>200) {
		ipt2.value=ipt2.value.substring(0,200);
	};
	var newp=document.createElement('li');
	newp.innerHTML='<img src="images/drtcxqtx02.jpg" alt=""><span>时尚旅游回复闪烁尾戒</span><div>'+ipt2.value+'<h6>'+year+'-'+mon+'-'+date+'&nbsp;'+hour+':'+min+'</h6><div/><p>删除</p>';
	if (ipt2.value=='') {
		tc.style.display='block';
	}else{
		tc.style.display='none';
		list.appendChild(newp);
		ipt2.value='';
		va.innerHTML='200';
		var btns=list.getElementsByTagName('p');
		for (var i = 0; i < btns.length; i++) {
			btns[i].onclick=function (){
				// alert('111');
				// console.log(this.parentNode.parentNode);
				list.removeChild(this.parentNode.parentNode.parentNode);
			}
		};
	}
}

var time=null;
ipt2.onfocus=function (){
	time=setInterval(function (){
		var len=ipt2.value.length;
		var sy=200-len;
		if (sy<=0) {
			va.style.color='red';
		};
		va.innerHTML=sy;
	},1)
}
ipt2.onblur=function (){
	clearInterval(time);
}
