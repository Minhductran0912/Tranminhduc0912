<?php
function divide($diviend,$divisor){
    if($divisor == 0){
        throw new Exception("Division by zero");
    }
    return $diviend / $divisor;
}

try {
    echo divide(5,0);
}catch(Exception $e){
    echo "Unable to divide";
}
?>