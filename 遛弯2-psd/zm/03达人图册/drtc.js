var con1=document.getElementById('con_b1');
var tp=document.getElementsByTagName('ul')[0];
var lis=tp.getElementsByTagName('li');
var con2=document.getElementById('con_b2');
var tps=con2.getElementsByTagName('li')



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



var blue=byclass3('blue')[0];
var arr=['images/drtc02.jpg','images/drtc03.jpg','images/drtc04.jpg','images/drtc05.jpg','images/drtc06.jpg','images/drtc07.jpg','images/drtc08.jpg','images/drtc09.jpg','images/drtc10.jpg','images/drtc11.jpg','images/drtc12.jpg'];
var arr1=['images/drtctx01.png','images/drtctx02.png','images/drtctx03.png'];
var arr2=['台北一日游','嘉义一日游','台东一日游','高雄一日游','嘉义一日游','台中一日游','台北一日游','花莲一日游','台东绿岛一日游','日月潭一日游','台中一日游'];

var a=-1,b=0;
for (var i = 0; i < arr.length; i++) {
	var newli=document.createElement('li');
	newli.className='blue';
	newli.innerHTML=blue.innerHTML;
	tp.appendChild(newli);
	a++;
	b++;
	var tu=byclass3('tu');
	var place=byclass3('place');
	tu[b].src=arr[a];
	place[b].innerHTML=arr2[a];
};

var tx1=byclass3('tx1');
for (var i = 0; i < 12; i++) {
	if ((i%3)==1) {
		tx1[i].src=arr1[1];
	};
};
for (var i = 0; i < 12; i++) {
	if ((i%3)==2) {
		tx1[i].src=arr1[2];
	};
};

var tc=1;
var con2=document.getElementById('con_b2')
var tp=con2.getElementsByTagName('ul')[0];
for (var i = 0; i < arr1.length; i++) {
	var newli=document.createElement('li');
	newli.className='blue';
	newli.innerHTML=blue.innerHTML;
	tp.appendChild(newli);
	tc++;
	if (i==1) {
		newli.children[3].src=arr1[1];
	};
	if (i==2) {
		newli.children[3].src=arr1[2];
	};
	newli.children[0].src=arr[tc];
	newli.children[6].innerHTML=arr2[tc];
};









var jt=byclass3('jt');
var jt1=byclass3('jt1');
var jt2=byclass3('jt2');
var bk=byclass3('bk');
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseover=function (){
		for (var i = 0; i < lis.length; i++) {
			if (lis[i]==this) {
				jt[i].style.display='block';
				jt1[i].style.display='block';
				jt2[i].style.display='block';
				bk[i].style.display='block';
			}
		};
		
	};

	lis[i].onmouseout=function (){
		for (var i = 0; i < lis.length; i++) {
			if (lis[i]==this) {
				jt[i].style.display='none';
				jt1[i].style.display='none';
				jt2[i].style.display='none';
				bk[i].style.display='none';
			};
		};
				
	}
}

