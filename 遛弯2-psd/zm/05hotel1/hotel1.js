var area=document.getElementById('area');
var lis1=area.getElementsByTagName('li');
for (var i = 0; i < lis1.length; i++) {
	lis1[i].onclick=function (){
		for (var i = 0; i < lis1.length; i++) {
			if (lis1[i]==this) {
				lis1[i].className='show';
			} else{
				lis1[i].className='';
			};
		};
	}
};


var phouse=document.getElementById('phouse');
var lis2=phouse.getElementsByTagName('li');
// console.log(lis2.length);
// console.log(phouse.length);
for (var i = 0; i < lis2.length; i++) {
	lis2[i].onclick=function (){
		for (var i = 0; i < lis2.length; i++) {
			if (lis2[i]==this) {
				lis2[i].className='show2';
			} else{
				lis2[i].className='';
			};
		};
	}
};


//重置样式
var reset=document.getElementById('reset');
reset.onclick=function (){
	for (var i = 0; i < lis1.length; i++) {
		lis1[i].className='';
	};
	lis1[0].className='show';
	for (var i = 0; i < lis2.length; i++) {
		lis2[i].className='';
	};
	lis2[0].className='show2';
}


//图片滚动3个
function roll (cs) {
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
	var outer=byclass3('outer')[cs];
	var inner=byclass3('inner')[cs];
	var lft=byclass3('lft')[cs];
	var rgt=byclass3('rgt')[cs];
	var imgs=inner.getElementsByTagName('img');
	var firstimg=inner.children[0].cloneNode(true);
	var lastimg=inner.children[imgs.length-1].cloneNode(true);
	inner.appendChild(firstimg);
	inner.insertBefore(lastimg,inner.children[0]);
	outer.scrollLeft=imgs[0].offsetWidth;
	var a=1;
	var time1=null,time2=null;
	function automove () {
		clearInterval(time1);
		time1=setInterval(function (){
			a++;
			if (a>=imgs.length) {
				a=2;
				outer.scrollLeft=imgs[0].offsetWidth;
			};
			move();
		},3000)
	}
	automove();
	function move () {
		var start=outer.scrollLeft;
		var end=imgs[0].offsetWidth*a;
		var change=end-start;
		var minstep=0;
		var maxstep=20;
		var everystep=change/maxstep;
		clearInterval(time2);
		time2=setInterval(function (){
			minstep++;
			if (minstep>=maxstep) {
				clearInterval(time2);
			};
			start+=everystep;
			outer.scrollLeft=start;
		},20)
	}
	lft.onclick=function (){
		a--;
		if (a<0) {
			a=imgs.length-3;
			outer.scrollLeft=imgs[0].offsetWidth*(a+1);
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
		move();
		automove();
	}
}
roll('0');//第一个
roll('1');//第二个
roll('2');//第三个