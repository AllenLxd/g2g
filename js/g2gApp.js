(function(angular) {
	'use strict';
	var app = angular.module('g2gApp', ['ngRoute']);
	app.controller('productCtrl', function($scope) {
	
		
		$scope.products = [

			{pid:'signlighting', cid:'trico', img: 'channel_letter/trico.jpg', href: 'trico.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_i_gen_iv.jpg', href: 'aurora_i_gen_iv.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_mini_red.jpg', href: 'aurora_mini_red.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_mini_white.jpg', href: 'aurora_mini_white.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_iii_gen_i.jpg', href: 'aurora_iii_gen_i.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_sv_white.jpg', href: 'aurora_sv_white.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_sv_red.jpg', href: 'aurora_sv_red.html'},
			{pid:'signlighting', cid:'aurora', img: 'channel_letter/aurora_red.jpg', href: 'aurora_i_red.html'},
			/*{pid:'signlighting', cid:'nox', img: 'channel_letter/nox.jpg', href: 'NOX-Series.html'},*/
			{pid:'signlighting', cid:'anpro', img: 'channel_letter/anpro.jpg', href: 'anpro_160.html'},
			{pid:'signlighting', cid:'wow', img: 'channel_letter/wow_white.jpg', href: 'wow_series.html'},
			/*{pid:'signlighting', cid:'wow', img: 'channel_letter/wow_red.jpg', href: 'WOW-Red.html'},*/
			{pid:'signlighting', cid:'anpro', img: 'channel_letter/anpro_180.jpg', href: 'anpro_180.html'},
			{pid:'signlighting', cid:'micro', img: 'channel_letter/micro.jpg', href: 'micro.html'},
			
			

			{pid:'signlighting', cid:'side', img: 'sign_box/side.jpg', href: 'side.html'},
			{pid:'signlighting', cid:'side', img: 'sign_box/slim_side_bar.jpg', href: 'slim_side.html'},
			{pid:'signlighting', cid:'array', img: 'sign_box/g2g_array.jpg', href: 'array_sf.html'},
			{pid:'signlighting', cid:'array', img: 'sign_box/g2g_array.jpg', href: 'array_df.html'},
			/*{pid:'signlighting', cid:'sparx', img: 'sign_box/sparx.jpg', href: 'SparX-Lighting-System.html'},*/
			{pid:'signlighting', cid:'trident', img: 'sign_box/trident_df.jpg', href: 'trident_df.html'},
			{pid:'signlighting', cid:'trident', img: 'sign_box/trident_sf.jpg', href: 'trident_sf.html'},
			{pid:'signlighting', cid:'trident-stick', img: 'sign_box/stick_df.jpg', href: 'trident_df_stick.html'},
			{pid:'signlighting', cid:'trident-stick', img: 'sign_box/stick_sf.jpg', href: 'trident_sf_stick.html'},
			{pid:'signlighting', cid:'trident-stick', img: 'sign_box/trident_premier_stick.jpg', href: 'trident_premier_stick.html'},
			{pid:'signlighting', cid:'arraybracket', img: 'accessories/arraybracket.jpg', href: 'arraybracket.html'},
			{pid:'signlighting', cid:'tridentbracket', img: 'accessories/tridentbracket.jpg', href: 'tridentbracket.html'},
			{pid:'signlighting', cid:'hosocket', img: 'accessories/hosocket.jpg', href: 'Ho_socket.html'},
			{pid:'signlighting', cid:'neon', img: 'neon/aurora_flex_mini.jpg', href: 'aurora_flex_mini.html'},
			{pid:'signlighting', cid:'neon', img: 'neon/aurora_flex.jpg', href: 'aurora_flex.html'},
			{pid:'signlighting', cid:'anpro-stick', img: 'sign_box/anpro_180_stick_sf.jpg', href: 'anpro_180_stick_sf.html'},
			{pid:'signlighting', cid:'anpro-stick', img: 'sign_box/anpro_180_stick_df.jpg', href: 'anpro_180_stick_df.html'},

			{pid:'outdoorlighting', cid:'oona-slim', img: 'wall_washer/oona_slim.jpg', href: 'oona_slim.html'},
			{pid:'outdoorlighting', cid:'i_series', img: 'wall_washer/lww_1.jpg', href: 'wall_washer_i_series.html'},
			{pid:'outdoorlighting', cid:'ii_series', img: 'wall_washer/lww_2.jpg', href: 'wall_washer_ii_series.html'},
			{pid:'outdoorlighting', cid:'v_series', img: 'wall_washer/lww_5.jpg', href: 'wall_washer_v_series.html'},
			{pid:'outdoorlighting', cid:'vi_series', img: 'wall_washer/lww_6.jpg', href: 'wall_washer_vi_series.html'},
			{pid:'outdoorlighting', cid:'vii_series', img: 'wall_washer/lww_7.jpg', href: 'wall_washer_vii_series.html'},
			{pid:'outdoorlighting', cid:'viii_series', img: 'wall_washer/lww_8.jpg', href: 'wall_washer_viii_series.html'},



			{pid:'outdoorlighting', cid:'i_series', img: 'flood_light/flood_10.jpg', href: 'flood_light_10W.html'},
			{pid:'outdoorlighting', cid:'ii_series', img: 'flood_light/flood_20.jpg', href: 'flood_light_20W.html'},
			{pid:'outdoorlighting', cid:'iii_series', img: 'flood_light/flood_30.jpg', href: 'flood_light_30W.html'},
			{pid:'outdoorlighting', cid:'v_series', img: 'flood_light/flood_50.jpg', href: 'flood_light_50W.html'},
			{pid:'outdoorlighting', cid:'vi_series', img: 'flood_light/flood_100.jpg', href: 'flood_light_100W.html'},

			{pid:'signlighting', cid:'wifi300', img: 'controller/wifi_300.jpg', href: 'wifi_300.html'},
			{pid:'signlighting', cid:'diywifi', img: 'controller/diy_wifi.jpg', href: 'diy_wifi.html'},
			{pid:'signlighting', cid:'rf3keys', img: 'controller/rf_3keys.jpg', href: 'rf_dimmer.html'},
			{pid:'signlighting', cid:'knod', img: 'controller/knob.jpg', href: 'knob_dimmer.html'},

		   /*{pid:'signlighting', cid:'100W', img: 'power/100W.jpg', href: 'power100W.html'},
			{pid:'signlighting', cid:'200W', img: 'power/200W.jpg', href: 'power200W.html'},
			{pid:'signlighting', cid:'300W', img: 'power/300W.jpg', href: 'power300W.html'},*/

			{pid:'outdoorlighting', cid:'40W', img: 'shoebox/shoebox_40.jpg', href: 'shoebox_light_40W.html'},
			{pid:'outdoorlighting', cid:'80W', img: 'shoebox/shoebox_80.jpg', href: 'shoebox_light_80W.html'},
			{pid:'outdoorlighting', cid:'120W', img: 'shoebox/shoebox_120.jpg', href: 'shoebox_light_120W.html'},
			{pid:'outdoorlighting', cid:'160W', img: 'shoebox/shoebox_160.jpg', href: 'shoebox_light_160W.html'},
			{pid:'outdoorlighting', cid:'200W', img: 'shoebox/shoebox_200.jpg', href: 'shoebox_light_200W.html'},

			{pid:'outdoorlighting', cid:'105W', img: 'retrofit/retrofit_105.jpg', href: 'retrofit_kit_105W.html'},
			{pid:'outdoorlighting', cid:'120W', img: 'retrofit/retrofit_120.jpg', href: 'retrofit_kit_120W.html'},
			{pid:'outdoorlighting', cid:'150W', img: 'retrofit/retrofit_150.jpg', href: 'retrofit_kit_150W.html'},
			{pid:'outdoorlighting', cid:'200W', img: 'retrofit/retrofit_200.jpg', href: 'retrofit_kit_200W.html'},



			{pid:'commerciallighting', cid:'4ft', img: 'tube/tube_4ft.jpg', href: 'tube_4ft.html'},
			{pid:'commerciallighting', cid:'6ft', img: 'tube/tube_6ft.jpg', href: 'tube_6ft.html'},
			{pid:'commerciallighting', cid:'8ft', img: 'tube/tube_8ft.jpg', href: 'tube_8ft.html'},


            /*calss2*/
			{pid:'letter', cid:'trico', img: 'channel_letter/trico.jpg', href: 'trico.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_i_gen_iv.jpg', href: 'aurora_i_gen_iv.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_mini_red.jpg', href: 'aurora_mini_red.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_mini_white.jpg', href: 'aurora_mini_white.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_iii_gen_i.jpg', href: 'aurora_iii_gen_i.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_sv_white.jpg', href: 'aurora_sv_white.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_sv_red.jpg', href: 'aurora_sv_red.html'},
			{pid:'letter', cid:'aurora', img: 'channel_letter/aurora_red.jpg', href: 'aurora_i_red.html'},
			/*{pid:'letter', cid:'nox', img: 'channel_letter/nox.jpg', href: 'NOX-Series.html'},*/
			{pid:'letter', cid:'anpro', img: 'channel_letter/anpro.jpg', href: 'anpro_160.html'},
			{pid:'letter', cid:'anpro', img: 'channel_letter/anpro_180.jpg', href: 'anpro_180.html'},
			{pid:'letter', cid:'wow', img: 'channel_letter/wow_white.jpg', href: 'wow_series.html'},
			/*{pid:'letter', cid:'wow', img: 'channel_letter/wow_red.jpg', href: 'WOW-Red.html'},*/
			{pid:'letter', cid:'micro', img: 'channel_letter/micro.jpg', href: 'micro.html'},

			{pid:'sign', cid:'side', img: 'sign_box/side.jpg', href: 'side.html'},
			{pid:'sign', cid:'side', img: 'sign_box/slim_side_bar.jpg', href: 'slim_side.html'},
			{pid:'sign', cid:'array', img: 'sign_box/g2g_array.jpg', href: 'array_sf.html'},
			{pid:'sign', cid:'array', img: 'sign_box/g2g_array.jpg', href: 'array_df.html'},
			/*{pid:'sign', cid:'sparx', img: 'sign_box/sparx.jpg', href: 'SparX-Lighting-System.html'},*/
			{pid:'sign', cid:'trident', img: 'sign_box/trident_df.jpg', href: 'trident_df.html'},
			{pid:'sign', cid:'trident', img: 'sign_box/trident_sf.jpg', href: 'trident_sf.html'},
			{pid:'sign', cid:'trident-stick', img: 'sign_box/stick_df.jpg', href: 'trident_df_stick.html'},
			{pid:'sign', cid:'trident-stick', img: 'sign_box/stick_sf.jpg', href: 'trident_sf_stick.html'},
			{pid:'sign', cid:'trident-stick', img: 'sign_box/trident_premier_stick.jpg', href: 'trident_premier_stick.html'},
			{pid:'sign', cid:'anpro-stick', img: 'sign_box/anpro_180_stick_sf.jpg', href: 'anpro_180_stick_sf.html'},
			{pid:'sign', cid:'anpro-stick', img: 'sign_box/anpro_180_stick_df.jpg', href: 'anpro_180_stick_df.html'},
			
			{pid:'accessories', cid:'arraybracket', img: 'accessories/arraybracket.jpg', href: 'arraybracket.html'},
			{pid:'accessories', cid:'tridentbracket', img: 'accessories/tridentbracket.jpg', href: 'tridentbracket.html'},
			{pid:'accessories', cid:'hosocket', img: 'accessories/hosocket.jpg', href: 'Ho_socket.html'},
			
			{pid:'neon', cid:'neon', img: 'neon/aurora_flex_mini.jpg', href: 'aurora_flex_mini.html'},
			{pid:'neon', cid:'neon', img: 'neon/aurora_flex.jpg', href: 'aurora_flex.html'},
			


			{pid:'wall', cid:'oona-slim', img: 'wall_washer/oona_slim.jpg', href: 'oona_slim.html'},
			{pid:'wall', cid:'i_series', img: 'wall_washer/lww_1.jpg', href: 'wall_washer_i_series.html'},
			{pid:'wall', cid:'ii_series', img: 'wall_washer/lww_2.jpg', href: 'wall_washer_ii_series.html'},
			{pid:'wall', cid:'v_series', img: 'wall_washer/lww_5.jpg', href: 'wall_washer_v_series.html'},
			{pid:'wall', cid:'vi_series', img: 'wall_washer/lww_6.jpg', href: 'wall_washer_vi_series.html'},
			{pid:'wall', cid:'vii_series', img: 'wall_washer/lww_7.jpg', href: 'wall_washer_vii_series.html'},
			{pid:'wall', cid:'viii_series', img: 'wall_washer/lww_8.jpg', href: 'wall_washer_viii_series.html'},



			{pid:'flood', cid:'i_series', img: 'flood_light/flood_10.jpg', href: 'flood_light_10W.html'},
			{pid:'flood', cid:'ii_series', img: 'flood_light/flood_20.jpg', href: 'flood_light_20W.html'},
			{pid:'flood', cid:'iii_series', img: 'flood_light/flood_30.jpg', href: 'flood_light_30W.html'},
			{pid:'flood', cid:'v_series', img: 'flood_light/flood_50.jpg', href: 'flood_light_50W.html'},
			{pid:'flood', cid:'vi_series', img: 'flood_light/flood_100.jpg', href: 'flood_light_100W.html'},

			{pid:'controller', cid:'wifi300', img: 'controller/wifi_300.jpg', href: 'wifi_300.html'},
			{pid:'controller', cid:'diywifi', img: 'controller/diy_wifi.jpg', href: 'diy_wifi.html'},
			{pid:'controller', cid:'rf3keys', img: 'controller/rf_3keys.jpg', href: 'rf_dimmer.html'},
			{pid:'controller', cid:'knod', img: 'controller/knob.jpg', href: 'knob_dimmer.html'},

			
			{pid:'shoebox', cid:'40W', img: 'shoebox/shoebox_40.jpg', href: 'shoebox_light_40W.html'},
			{pid:'shoebox', cid:'80W', img: 'shoebox/shoebox_80.jpg', href: 'shoebox_light_80W.html'},
			{pid:'shoebox', cid:'120W', img: 'shoebox/shoebox_120.jpg', href: 'shoebox_light_120W.html'},
			{pid:'shoebox', cid:'160W', img: 'shoebox/shoebox_160.jpg', href: 'shoebox_light_160W.html'},
			{pid:'shoebox', cid:'200W', img: 'shoebox/shoebox_200.jpg', href: 'shoebox_light_200W.html'},

			{pid:'retrofit', cid:'105W', img: 'retrofit/retrofit_105.jpg', href: 'retrofit_kit_105W.html'},
			{pid:'retrofit', cid:'120W', img: 'retrofit/retrofit_120.jpg', href: 'retrofit_kit_120W.html'},
			{pid:'retrofit', cid:'150W', img: 'retrofit/retrofit_150.jpg', href: 'retrofit_kit_150W.html'},
			{pid:'retrofit', cid:'200W', img: 'retrofit/retrofit_200.jpg', href: 'retrofit_kit_200W.html'},

			{pid:'tube', cid:'4ft', img: 'tube/tube_4ft.jpg', href: 'tube_4ft.html'},
			{pid:'tube', cid:'6ft', img: 'tube/tube_6ft.jpg', href: 'tube_6ft.html'},
			{pid:'tube', cid:'8ft', img: 'tube/tube_8ft.jpg', href: 'tube_8ft.html'},



		];
		$scope.pid = 'signlighting';
		$scope.cid = '';
		$scope.flag = 1;
		$scope.filtered = $scope.products

	    $scope.filterProducts = function(pid, cid) {
			    //赋值
				if(pid == 'signlighting') {
					$scope.flag=1;
				}
				else if(pid == 'outdoorlighting')
				{
					$scope.flag=2;
				}else if(pid == 'commerciallighting')
				{
					$scope.flag=3;
				}
				
				if(pid && !cid) {
		    			$scope.filtered = $scope.products.filter(function(item) {
			            return item['pid'] == pid;
			        });
		    		}
		    		else if(pid && cid)
		    		{
		    			$scope.filtered = $scope.products.filter(function(item) {
		            		return item['pid'] == pid && item['cid'] == cid;
		        		});
		    		}
	
		    		$scope.pid = pid;
				$scope.cid = cid;
	    };
	});
	

	

		    
})(window.angular);

