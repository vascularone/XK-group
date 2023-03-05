<?php
	header("Access-Control-Allow-Origin: http://localhost:3000");

	header("Access-Control-Allow-Headers: Content-Type");
	$errors = [];

// Validate card number
function validateCardNumber($cardNumber) {
    $visaRegEx = "/^(?:4[0-9]{12}(?:[0-9]{3})?)$/";
	$mastercardRegEx = "/^(?:5[1-5][0-9]{14})$/";
    $amexRegEx = "/^(?:3[47][0-9]{13})$/";

    if (preg_match($visaRegEx, $cardNumber)) {
        return 'visa';
    } else if (preg_match($mastercardRegEx, $cardNumber)) {
        return 'mastercard';
    } else if (preg_match($amexRegEx, $cardNumber)) {
        return 'amex';
    } else {
        return 'invalid';
    }
}
function validateExpDate($expMonth, $expYear) {
	$currentYear = date('Y');
	$currentMonth = date('m');
	if (($expMonth > $currentMonth && $expYear == $currentYear) || $expYear > $currentYear) {
		return false;
	} else {
		return true;
	}
}
if (!empty($_POST)) {
    // Get form data
    $cardNumber = $_POST['cardNumber'];
    $cvv = $_POST['cardCVV'];
	$name = $_POST['name'];
	$expMonth = $_POST['cardMonth'];
	$expYear = $_POST['cardYear'];
    // Validate card number
    $cardType = validateCardNumber($cardNumber);
    if ($cardType == 'invalid') {
        $errors['cardNumber'] = 'Invalid card number';
    }

    // Validate CVV
    if (!preg_match('/^[0-9]{3,4}$/', $cvv)) {
        $errors['cvv'] = 'Invalid CVV';
    }
	$expCard = validateExpDate($expMonth, $expYear);
	if ($expCard == true)
	{
		$errors['expCard'] = 'Expired';
	}

    // If there are no errors, process the payment
    if (empty($errors)) {
        // Process payment
        $response = ['success' => true];
        echo json_encode($response);
        exit;
    }
}

// Return errors
echo json_encode(['errors' => $errors]);


?>

