<?php

// 19:05:45
// $s = '07:05:45PM';

// 12:05:45
// $s = '12:05:45PM';

// 07:05:45
// $s = '07:05:45AM';

// 00:40:22
$s = '12:40:22AM';

function timeConversion($s) {
	$time = explode(':',$s);
	$ampm = substr($time[2],2);

	if($ampm == 'PM'){
		$detik = str_replace('PM', '', $time[2]);
		$jam = $time[0] + 12;
		if($jam > 23){
			$jam2 = $jam - 12;
			if($jam2 == 0){
				$new = $jam2.'0:'.$time[1].':'.$detik;
			} else{
				$new = $jam2.':'.$time[1].':'.$detik;
			}
		} else{
			$new = $jam.':'.$time[1].':'.$detik;
		}
	} else {
		$jam = $time[0];
		$detik = str_replace('AM', '', $time[2]);
		if($jam > 11){
			$jam2 = $jam - 12;
			if($jam2 == 0){
				$new = $jam2.'0:'.$time[1].':'.$detik;
			} else{
				$new = $jam2.':'.$time[1].':'.$detik;
			}
		} else{
			$new = $jam.':'.$time[1].':'.$detik;
		}
	}

    print_r($new);
}

timeConversion($s);


?>