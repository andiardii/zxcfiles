<?php 
function kangaroo($x1, $v1, $x2, $v2) {
    // Write your code here
    if ($x1 < $x2 && $v1 < $v2) {
        return 'NO';
    }
    
    $data = [];
    for ($i = 0; $i <= 1000; $i++) {
        $x1 += $v1;
        $x2 += $v2;
        
        if ($x1 === $x2) {
            $data[] = 1;
        } else {
            $data[] = 0;
        }
    }
    
    if ($x1 < $x2 && $v1 > $v2) {
        return 'YES';
    } else if (array_sum($data) == 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}
?>