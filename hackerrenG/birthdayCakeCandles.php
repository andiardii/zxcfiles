<?php

$candles = Array(3, 2, 1, 3);

function birthdayCakeCandles($candles) {
	$max = max($candles);
	$find = array_count_values($candles);
    echo $find[$max];
}

birthdayCakeCandles($candles);

?>