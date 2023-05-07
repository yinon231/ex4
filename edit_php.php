<?php 
$name_val=$_GET['name'];
$color_val=$_GET['color'];
$size_val=$_GET['size'];

$numberOfShirts=0;
if($name_val=="pique" && $color_val=="green")
{
    if($numberOfShirts==0)
         echo "<h1>$name_val item in $color_val color is out of stock</h1>";
}
else {
    echo "<h1>$name_val item with $color_val updated successfully!";
}
?>