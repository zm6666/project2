
$('.csdw').hover(function (){
	$('.head_b_l').show();
	$('.head_l').css({'background':'#fff','border-top':'1px solid #ddd','border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
	$('.head_b_l').css({'background':'#fff','border-left':'1px solid #ddd','border-right':'1px solid #ddd','border-bottom':'1px solid #ddd'})
	$('.head_l em').css({'transform':'rotateZ(180deg)'})
},function (){
	$('.head_b_l').hide();
	$('.head_l').css({'background':'#f1f1f1','border-top':'1px solid #f1f1f1','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'})
	$('.head_l em').css({'transform':'rotateZ(0deg)'})
})



$('.head_b_l a').click(function (){
	$(this).addClass('show').siblings().removeClass('show');
	$('.bj').html($(this).html());
	// console.log($('.head_l').get(0).offsetWidth);
	// $('.line').css('width',$('.head_l').get(0).offsetWidth);
	$('.line').css('width',$('.head_l').width()+20)
	$('.head_b_l').hide();
})

//我的京东
$('.wdjdp').hover(function (){
	$('.wdjd').show();
	$('.wdjdt').css({'background':'#fff','border-top':'1px solid #ddd','border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
	$('.line2').show();
},function (){
	$('.wdjd').hide();
	$('.wdjdt').css({'background':'#f1f1f1','border-top':'1px solid #f1f1f1','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'})
	$('.line2').hide();
})

//手机京东
$('.sj').hover(function (){
	$('.sj_b').show();
	$('.sj_t').css({'background':'#fff','border-top':'1px solid #ddd','border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
	$('.sj_t_tp').show();
},function (){
	$('.sj_b').hide();
	$('.sj_t').css({'background':'#f1f1f1','border-top':'1px solid #f1f1f1','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'})
	$('.sj_t_tp').hide();
})

// 关注京东
$('.gzjdp').hover(function (){
	$('.gzjd_b').show();
	$('.gzjd_t').css({'background':'#fff','border-top':'1px solid #ddd','border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
},function (){
	$('.gzjd_b').hide();
	$('.gzjd_t').css({'background':'#f1f1f1','border-top':'1px solid #f1f1f1','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'})
})

//客户服务
$('.khfwp').hover(function (){
	$('.khfw_b').show();
	$('.khfw_t').css({'background':'#fff','border-top':'1px solid #ddd','border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
},function (){
	$('.khfw_b').hide();
	$('.khfw_t').css({'background':'#f1f1f1','border-top':'1px solid #f1f1f1','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'})
})

//网站导航
$('.wzdhp').hover(function (){
	$('.wzdh_b').show();
	$('.wzdh_t').css({'background':'#fff','border-top':'1px solid #ddd','border-left':'1px solid #ddd','border-right':'1px solid #ddd'})
},function (){
	$('.wzdh_b').hide();
	$('.wzdh_t').css({'background':'#f1f1f1','border-top':'1px solid #f1f1f1','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'})
})

//购物车
$('.head_b3').hover(function (){
	$('.head_b3_b').show();
	$('.head_b3_t').css({'background':'#fff','border-bottom':'#fff'})
	$('.line0').show();
},function (){
	$('.head_b3_b').hide();
	$('.head_b3_t').css({'background':'#f1f1f1','border':'1px solid #ddd'})
	$('.line0').hide();
})


//大图滚动部分 
var time1=null,time2=null;
var a=0,b=0,x=0;
function move (){
	clearInterval(time1);
	time1=setInterval(function (){
		a++;
		if (a>=$('.inner li').length) {
			a=0;
		};
		b++;
		if (b>=$('.num li').length) {
			b=0;
		};
		fade();
	},2000)
}
move();
//数字变化
function fade (){
	$('.num li').eq(b).addClass('show').siblings().removeClass('show');
	$('.inner li').eq(a).fadeIn('slow',function (){
		x=0;
	}).siblings().fadeOut('slow');
}
//左点击
$('.left').click(function (ev){
	var e=ev||window.event;
	if (e.preventDefault) {
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
	if (x==0) {
		x=1;
		a--;
		if (a<0) {
			a=$('.inner li').length-1;
		};
		b--;
		if (b<0) {
			b=$('.num li').length-1;
		};
		fade();
		move();
	};
})
//右点击
$('.right').click(function (ev){
	// clearInterval(time1);
	var e=ev||window.event;
	if (e.preventDefault) {
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
	if (x==0) {
		x=1;
		a++;
		if (a>=$('.inner li').length) {
			a=0;
		};
		b++;
		if (b>=$('.num li').length) {
			b=0;
		};
		fade();
		move();
	};
})
//数字变化
$('.num li').mouseover(function (){
	clearInterval(time1);
	clearTimeout(time2);
	var k=$('.num li').index(this);
	time2=setTimeout(function (){
		a=k;
		b=k;
		fade();
		move();
	},400)
})
//箭头左右显示
$('.outer,.left,.right').hover(function (){
	$('.left').show();
	$('.right').show();
},function (){
	$('.left').hide();
	$('.right').hide();
})
//鼠标悬停
$('.outer').mouseover(function (){
	clearInterval(time1);
})
$('.outer').mouseout(function (){
	move();
})

//大图滚动左侧部分
$('.con_l_con1_l_t a').hover(function (){
	$(this).css({'background':'#C81623'});
	$(this).children('span').css({'background':'#B1191A'});
},function (){
	$(this).css({'background':'#7c7171'});
	$(this).children('span').css({'background':'#5c5251'});
})


//左侧下拉表
$('.li1,.con_l_con1').hover(function (){
	var i=$(this).index();
	// console.log(i);
	$('.li1').eq(i).css({'background':'#fff'});
	$('.li1').eq(i).children().children().css({'color':'#c81623'});
	$('.con_l_con1').eq(i).show();
},function (){
	var i=$(this).index();
	$('.li1').eq(i).css({'background':'#c81623'});
	$('.li1').eq(i).children().children().css({'color':'#fff'});
	$('.con_l_con1').eq(i).hide();
})

//tab右面（促销/公告）
$('.con_r_mt span').hover(function (){
	var i=$('.con_r_mt span').index(this);
	$('.con_r_mb li').eq(i).show().siblings().hide();
})

$('.con_r_mt span:nth-child(2)').hover(function (){
	$('.slide').css({'transform':'translate(59px)'});
})
$('.con_r_mt span:nth-child(1)').hover(function (){
	$('.slide').css({'transform':'translate(0px)'});
})

//话费
$('.huafei em').hover(function (){
	var k=$('.huafei em').index(this);
	$(this).addClass('bgt').siblings().removeClass('bgt');
	$('.huafei_bp li').eq(k).show().siblings().hide();
})
//机票
function jp (f,y) {
	$('.jipiao em:nth-child('+f+')').hover(function (){
		// var k=$('.jipiao em').index(this);
		$(this).addClass('bgt').siblings().removeClass('bgt');
		$('.jipiao_bp_inner').css({'transform':'translateX('+y+'px)'});

	})
}
jp(1,0);
jp(2,-210);
jp(3,-420);
//电影票
$('.dianying em').hover(function (){
	var k=$('.dianying em').index(this);
	$(this).addClass('bgt').siblings().removeClass('bgt');
	$('.dianying_bp li').eq(k).show().siblings().hide();
})
//游戏
$('.game em').hover(function (){
	var k=$('.game em').index(this);
	$(this).addClass('bgt').siblings().removeClass('bgt');
	$('.game_bp li').eq(k).show().siblings().hide();
})



//表头效果
$('.con_r_bb1 li').hover(function (){
	var k=$('.con_r_bb1 li').index(this);
	$('.con_r_bb1 li').eq(k).addClass('hs').siblings().removeClass('hs');
	$('.con_r_bb2,.con_r_bb3,.con_r_bb4,.con_r_bb5').eq(k).show().siblings().hide();
})

//超级特效！！！！！！！！！
$('.drop1').hover(function (){
	var k=$('.drop1').index(this);//下标控制 点击的和要变化的;
	$('.con_r_bb1 li').eq(k).addClass('hs').siblings().removeClass('hs');
	$('.tabp').css({'transform':'translateY(-220px)'});
	$('.con_r_bb2,.con_r_bb3,.con_r_bb4,.con_r_bb5').eq(k).show().siblings().hide();
})
$('.gb').click(function (){
	$('.tabp').css({'transform':'translateY(0px)'});
})


    				// con1部分
var con1t_r=document.querySelector('.con1t_r');
setInterval(function (){
	var now=new Date();
	// var future=new Date();
	//var sy=future-now;
	// console.log(sy);
	var hour=23-now.getHours();
	var minute=59-now.getMinutes();
	var second=59-now.getSeconds();
	if (hour<10) {
		hour='0'+hour;
	};
	if (minute<10) {
		minute='0'+minute;
	};
	if (second<10) {
		second='0'+second;
	};
	con1t_r.innerHTML='<li><span>当前场次</span><var><em>'+hour+'</em>:<em>'+minute+'</em>:<em>'+second+'</em></var><span>后结束抢购</span>';
},1)

// css3效果
$('.con1_css').hover(function (){
	var i=$('.con1_css').index(this);
	$('.con1_css img').eq(i).css({'transform':'translateY(-5px)'});
	$('.con1_l_t').eq(i).css({'color':'#c81623'});
},function (){
	var i=$('.con1_css').index(this);
	$('.con1_css img').eq(i).css({'transform':'translateY(0px)'});
	$('.con1_l_t').eq(i).css({'color':'#999'});
})

							// con2部分
$('.con2_m li').hover(function (){
	$(this).css({'opacity':'0.6'});
},function (){
	$(this).css({'opacity':'1'});
})


$('.con2_r li').hover(function (){
	$(this).css({'opacity':'0.6'});
},function (){
	$(this).css({'opacity':'1'});
})

							//con3部分左
$('.con3_l_bb li').hover(function (){
	var i=$('.con3_l_bb li').index(this);
	$('.con3_l_bb img').eq(i).css({'transform':'translateX(-5px)'});
},function (){
	$('.con3_l_bb img').css({'transform':'translateX(0px)'});
})
							
							// con3部分中
$('.con3_m_b_ta1').hover(function (){
	var i=$('.con3_m_b_ta1').index(this);
	$('.con3_m_b_ta1 img').eq(i).css({'transform':'translate(-5px)'})
},function (){
	var i=$('.con3_m_b_ta1').index(this);
	$('.con3_m_b_ta1 img').eq(i).css({'transform':'translate(0px)'})
})

							// con3部分右
function mm (x,px) {
	$('.con3_r_b_tab_t a:nth-child('+x+')').hover(function (){
		$('.bd').css({'transform':'translate('+px+'px)'});
	})
}
mm(1,0);
mm(2,72);
mm(3,144);
mm(4,216);
mm(5,290)

$('.con3_r_b_tab_t a').hover(function (){
	var i=$('.con3_r_b_tab_t a').index(this);
	$('.con3_r_b_tab_b ol').eq(i).show().siblings().hide();
})

$('.mobile li').hover(function (){
	var i=$('.mobile li').index(this);
	$('.mobile li p').eq(i).css({'color':'#c81623'}); 
},function (){
	var i=$('.mobile li').index(this);
	$('.mobile li p').eq(i).css({'color':'#666'});
})





							//con4部分
$('.con4_r_li').hover(function (){
	var i=$('.con4_r_li').index(this);
	$('.con4_r_li img').eq(i).css({'transform':'translateX(15px)'});
},function (){
	var i=$('.con4_r_li').index(this);
	$('.con4_r_li img').eq(i).css({'transform':'translateX(0px)'});
})
						
							//con5部分
$('.con5_con li').hover(function (){
	var i=$('.con5_con li').index(this);
	$('.con5_con a').eq(i).css({'opacity':'.8'});
},function (){
	var i=$('.con5_con li').index(this);
	$('.con5_con a').eq(i).css({'opacity':'1'});
})

							//右侧
$('.offside_t li').hover(function (){
	var i=$('.offside_t li').index(this);
	$('.offside_t li em').eq(i).css({'background':'#c81623'})
	$('.offside_t div').eq(i).css({'background':'#c81623'});
	$('.offside_t li em').eq(i).css({'transform':'translateX(-90px)'})
},function (){
	var i=$('.offside_t li').index(this);
	$('.offside_t li em').eq(i).css({'background':'#7a6e6e'})
	$('.offside_t div').eq(i).css({'background':'#7a6e6e'});
	$('.offside_t li em').eq(i).css({'transform':'translateX(0px)'})
})

$('.offside_b li').hover(function (){
	var i=$('.offside_b li').index(this);
	$('.offside_b li em').eq(i).css({'background':'#c81623'})
	$('.offside_b div').eq(i).css({'background':'#c81623'});
	$('.offside_b li em').eq(i).css({'transform':'translateX(-90px)'})
},function (){
	var i=$('.offside_b li').index(this);
	$('.offside_b li em').eq(i).css({'background':'#7a6e6e'})
	$('.offside_b div').eq(i).css({'background':'#7a6e6e'});
	$('.offside_b li em').eq(i).css({'transform':'translateX(0px)'})
})

$('.bbb').click(function (){
	$('body').animate({
		scrollTop:'0'
	})
})

// if ($('body').animate({scrollTop:'300'})) {
// 	$('.tt').css({'transform':'translateY(52px)'});
// };
// if ($('body').scrollTop()'300px') {
// 	// $('.tt').css({'transform':'translateY(52px)'})
// 	alert('111');
// };


setInterval(function (){
	var yu=$('body').scrollTop();
	document.onmousewheel=function (){
		if (yu>=700) {
			$('.tt').css({'transform':'translateY(52px)'})
		}else if(yu<=500){
			$('.tt').css({'transform':'translateY(0px)'})
		}
	}
},10)

