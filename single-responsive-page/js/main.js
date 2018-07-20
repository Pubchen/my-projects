
// 产品展开
$(document).ready(function(){
	$(".product").click(function(){
		var product_L = $("#product-box li").length;
		var product_H = $(window).height()-$("header").outerHeight();
		$("#product-box").css("height",product_H);
		$("#product-box li").css("height",parseFloat($("#product-box").height()/product_L));
		$("#product-box").slideToggle(500);
		$("#product-box ul").mouseleave(function(){
			$("#product-box").slideUp(500);
		})
	})
})

// 导航展开
$(document).ready(function(){
	$("header .menu").click(function(){
		var toggle_L = $("#nav-toggle li").length;
		var toggle_H = $(window).height()-$("header").outerHeight();
		$("#nav-toggle").css("height",toggle_H);
		$("#nav-toggle li").css("height",parseFloat($("#nav-toggle").height()/toggle_L));
		$("#nav-toggle").slideToggle(500);
		$("#nav-toggle ul").mouseleave(function(){
			$("#nav-toggle").slideUp(500);
		})
	})
})

// 服务内容展示
$(function () {
    $("#tabs li").click(function(){
        var t=$(this).index();
        $("#tabs li").eq(t).addClass("active").siblings().removeClass("active");
        $("#tab-list li").eq(t).addClass("select").siblings().removeClass("select");
    })

})

//屏幕滚动距离控制侧边栏的显示与隐藏
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 252) {
            $(".rightbar").fadeIn();
        }
        else {
            $(".rightbar").fadeOut();
        }
    });
});

//侧边栏二维码展开
$(document).ready(function(){
	$(".rightbar .item-2").click(function(){
		$(".rightbar-weixin").toggle();
	})
})

//回到顶部
$(".rightbar .item-4").click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
});