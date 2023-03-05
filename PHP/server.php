<?php
	header("Access-Control-Allow-Origin: http://localhost:3000");

	header("Access-Control-Allow-Headers: Content-Type");

	$user = $_POST['cardNumber'];
	echo ("Hello from server: $user");
?>
