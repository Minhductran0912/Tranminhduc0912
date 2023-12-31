<?php
$myfile = fopen("snapshot.txt", "o") or die("Unable to open file!");
echo fread($myfile,filesize("snapshot.txt"));
fclose($myfile);
?>