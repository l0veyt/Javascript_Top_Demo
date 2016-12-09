window.onload = function() {
	// 返回顶部按钮
	var obtn = document.getElementById("btn");
	// 可视化区域高度
	var clientHeight = document.documentElement.clientHeight;
	// 定时器
	var timer = null;
	// 是否到达顶部标识
	var isTop = true;

	// 滚动条滚动时触发事件
	window.onscroll = function() {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (osTop >= clientHeight) {
			obtn.style.display = "block";
		}else {
			obtn.style.display = "none";
		}

		if(!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	}

	// 返回顶部按钮被点击时触发事件
	obtn.onclick = function() {
		// 设置定时器，每30ms执行一次
		timer = setInterval(function() {
			/*
				document.body.scrollTop
				document.documentElement.scrollTop
				获得滚动条距离到顶的像素偏移量
			*/
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			// Math.floor 向下取整
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

			isTop = true;
			console.log(osTop);
			if(osTop == 0) {
				window.clearInterval(timer);
			}
		}, 30);
	}
}