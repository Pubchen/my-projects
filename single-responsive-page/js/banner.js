

$(document).ready(function(){
	var bannerCounter = 0;
	var bannerL = $(".banner-redirection>ul>li").length;
	//previous
	$(".banner-control .toPrevious").click(function(){
		if(bannerCounter == 0){
			bannerCounter = bannerL-1;
		}
		else{
			bannerCounter--;
		}
		$(".banner-redirection>ul>li").eq(bannerCounter).fadeIn("fast").siblings().hide();
		$(".pagination li").eq(bannerCounter).addClass("active").siblings().removeClass("active");
	})
	// next
	$(".banner-control .toNext").click(function(){
		if(bannerCounter == bannerL-1){
			bannerCounter = 0;
		}
		else{
			bannerCounter++;
		}
		$(".banner-redirection>ul>li").eq(bannerCounter).fadeIn("fast").siblings().hide();
		$(".pagination li").eq(bannerCounter).addClass("active").siblings().removeClass("active");
	})
	// 自动播放
	function autoplay(){
		bannerCounter++;
		if(bannerCounter > bannerL - 1){
			bannerCounter = 0;
		}
		$(".banner-redirection>ul>li").eq(bannerCounter).fadeIn("fast").siblings().hide();
		$(".pagination li").eq(bannerCounter).addClass("active").siblings().removeClass("active");
	}
	// 悬听暂停自动播放
	var interval = setInterval(autoplay,3000);
	$(".banner-redirection>ul>li").mouseenter(function(){
    	clearInterval(interval);
    })
    $(".banner-redirection>ul>li").mouseout(function(){
    	interval=setInterval(autoplay,3000);
    })
	//pagination控制
	$(".pagination ul li").click(function(){
		var bannerIndex = $(this).index();
		bannerCounter = bannerIndex;
		$(".banner-redirection>ul>li").eq(bannerCounter).fadeIn("fast").siblings().hide();
		$(".pagination li").eq(bannerCounter).addClass("active").siblings().removeClass("active");
	})

            
})
