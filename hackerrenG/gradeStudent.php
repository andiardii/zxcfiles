<?php

function gradingStudents($grades) {
    // Write your code here
    $data = [];
    foreach ($grades as $grade) {
        $gradeKelipatan = ceil($grade / 5) * 5;
        $gradeRange = $gradeKelipatan - $grade;
        
        if ($gradeRange < 3 && $gradeKelipatan >= 40) {
            $data[] = $gradeKelipatan;
        } else {
            $data[] = $grade;
        }
    }
    
    return $data;
}

?>