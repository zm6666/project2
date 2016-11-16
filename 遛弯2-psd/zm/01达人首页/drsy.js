

var lft=document.getElementById('lft');
var rgt=document.getElementById('rgt');
var outer=document.getElementById('con_t_m');
var inner=document.getElementById('inner');
var uls=inner.getElementsByTagName('ul');

var firstimg=inner.children[0].cloneNode(true);
var lastimg=inner.children[uls.length-1].cloneNode(true);
inner.appendChild(firstimg);
inner.insertBefore(lastimg,inner.children[0]);

var time1=null,time2=null;
outer.scrollLeft=(uls[0].offsetWidth);
var a=1;
console.log(uls.length);
function automove () {
	clearInterval(time1);
	time1=setInterval(function (){
		a++;
		if (a>=uls.length) {
			outer.scrollLeft=(uls[0].offsetWidth);
			a=2;
		};
		move();
	},3000)
}
automove();
function move () {
		var start=outer.scrollLeft;
		var end=(uls[0].offsetWidth)*a;
		var change=end-start;
		var minstep=0;
		var maxstep=20;
		var everystep=change/maxstep;
		clearInterval(time2);
		time2=setInterval(function  () {
			minstep++;
			if (minstep>=maxstep) {
				clearInterval(time2);
			};
			start=start+everystep;
			outer.scrollLeft=start;
		},15)
}

lft.onclick=function (){
	clearInterval(time1);
	clearInterval(time2);
	a--;
	if (a<0) {
		a=uls.length-3;
		outer.scrollLeft=uls[0].offsetWidth*(a+1);
	};
	move();
	automove();
}
rgt.onclick=function (){
	clearInterval(time1);
	clearInterval(time2);
	a++;
	if (a>=uls.length) {
		outer.scrollLeft=uls[0].offsetWidth;
		a=2;
	};
	move();
	automove();
}

var gg1=document.getElementById('gg1');
var gg2=document.getElementById('gg2');
var gg3=document.getElementById('gg3');
var gg4=document.getElementById('gg4');
var tp=document.getElementById('con_b_r_top');
var bt=document.getElementById('con_b_r_bottom');

tp.onmouseover=function (){
	gg1.style.display='block';
	gg3.style.display='block';
}
tp.onmouseout=function (){
	gg1.style.display='none';
	gg3.style.display='none';
}

bt.onmouseover=function (){
	gg2.style.display='block';
	gg4.style.display='block';
}
bt.onmouseout=function (){
	gg2.style.display='none';
	gg4.style.display='none';
}