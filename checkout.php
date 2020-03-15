<?php 
include_once("db_connect.php");
if ($_POST['Submit']){
	$first = $_POST['firstName'];
	print_r($first);
	die;
	$last = $_POST['lastName'];
	$address1 = $_POST['streetAddress'];
	$city = $_POST['cityAddress'];
	$state = $_POST['stateAddress'];
	$zip = $_POST['zipCode'];
	$phone = $_POST['phoneNumber'];
	$email = $_POST['email'];
	$cc = $_POST['ccNumber'];
	$exp = $_POST['expDate'];
	//$cvv = $_POST[''];
	echo 'Testing To Make Sure Info Passed On:<br>';
	echo 'First: ' . $first;
	echo 'Last: ' . $last;
	echo 'Address: ' . $address1;
	echo 'City: ' . $city;
	echo 'State: ' . $state;
	echo 'Zip: ' . $zip;
	echo 'Phone: ' . $phone;
	echo 'Email: ' . $email;
	echo 'CC: ' . $cc;
	echo 'Exp: ' . $exp;
}
?>