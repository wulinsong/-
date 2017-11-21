// 圆形进度条
$(function(){

	$('#html').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj1 = $('#html').data('radialIndicator');
			radialObj1.animate(60);

			$('#css').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj2 = $('#css').data('radialIndicator');
			radialObj2.animate(60);
			$('#javascript').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj3 = $('#javascript').data('radialIndicator');
			radialObj3.animate(50);
			$('#jquery').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj4 = $('#jquery').data('radialIndicator');
			radialObj4.animate(50);
			$('#bootstrap').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj5 = $('#bootstrap').data('radialIndicator');
			radialObj5.animate(60);
			$('#oracle').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj6 = $('#oracle').data('radialIndicator');
			radialObj6.animate(60);
			$('#MySQL').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj7 = $('#MySQL').data('radialIndicator');
			radialObj7.animate(60);
			$('#SSM').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj8 = $('#SSM').data('radialIndicator');
			radialObj8.animate(50);

	
})