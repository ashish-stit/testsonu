<?php
// Key Shennanigans
$file = "file.txt";
$myfile = fopen($file, "r") or die("Unable to open file!");
$message = fread($myfile,filesize($file));
fclose($myfile);

$key = str_replace(array('.', ' ', "\n", "\t", "\r"), '', $message);

/* Database connection start */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "assuredp_custinfo";
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>
