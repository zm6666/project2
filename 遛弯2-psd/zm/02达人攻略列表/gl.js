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