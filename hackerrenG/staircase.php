<?php

$n = 9;

function staircase($n) {
	for($i=1; $i<=$n; $i++) {
	    for($j=1; $j<=$n-$i; $j++) {
	        echo " ";
	    }
	    for($j=1; $j<=$i; $j++) {
	        echo "#";
	    }
	    echo "\n";
	}
}

staircase($n);

?>