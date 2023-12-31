<?php
/* variable to check */
$int = 122;

/* min value*/
$min = 1;
/* max value */
$max = 200;

if (filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range"=>$min, "max_range"=>$max))) === false){
    echo ("Variable value is not within the legal range");
}else{
    echo("Variables value is within the legal range");
}
?>