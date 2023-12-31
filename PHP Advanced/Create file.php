<?php
$myfile = fopen("Test.txt" ,"w") or die("Unable to open file!");
$txt = "Hello World\n";
fwrite($myfile,$txt);
$txt = "Hello\n";
fwrite($myfile,$txt);
fclose($myfile);
?>