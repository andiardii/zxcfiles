<?php

$arr = Array(1, 2, 3, 4, 5);

function miniMaxSum($arr) {
    $total = array_sum($arr);

    for ($i=0; $i<count($arr); $i++) {
        $data[] = $total-$arr[$i];
    }

    $max = max($data);
    $min = min($data);
    
    echo $min.' '.$max;
}

miniMaxSum($arr);

?>