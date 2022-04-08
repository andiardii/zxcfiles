<?php

$arr = Array(-4, 3, -9, 0, 4, 1);

function plusMinus($arr) {
    $t = count($arr);

    foreach($arr as $num){
       if($num > 0){
               $positive[] = $num;
       }else if($num < 0){
               $negative[] = $num;
       }else{
               $nol[] = $num;
       }
    }

    $p = number_format(count($positive)/$t, 6);
    $n = number_format(count($negative)/$t, 6);
    $no = number_format(count($nol)/$t, 6);

    print_r($p);
    print_r("\n");
    print_r($n);
    print_r("\n");
    print_r($no);
}

plusMinus($arr);

?>