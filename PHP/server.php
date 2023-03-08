<?php
//allow requests
	header("Access-Control-Allow-Origin: http://localhost:3000");

	header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");
	$errors = [];

	// Validate card number
    if (!function_exists('validateCardNumber')) {
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
} 
    //  validate expiration month and year
if (!function_exists('validateExpDate')) {
	function validateExpDate($expMonth, $expYear) {
		$currentYear = date('Y');
		$currentMonth = date('m');
		if (($expMonth > $currentMonth && $expYear == $currentYear) || $expYear > $currentYear) {
			return false;
		} else {
			return true;
		}
	}
}
	if (!empty($_POST)) {
	    // Get form data
	    $cardNumber = $_POST['cardNumber'];
        $hashedCardNumber = password_hash($cardNumber, PASSWORD_DEFAULT);
	    $cvv = $_POST['cardCVV'];
        $hashedCVV = password_hash($cvv, PASSWORD_DEFAULT);
	    $userFullname = $_POST['name'];
	    $userEmail = $_POST['email'];
	    $userPhone = $_POST['phoneNumber'];
	    $userCity = $_POST['city'];
	    $userAdress = $_POST['address'];
	    $userState = $_POST['state'];
	    $userCardName = $_POST['cardName'];
	    $expMonth = $_POST['cardMonth'];
	    $expYear = $_POST['cardYear'];
	    $userZip = $_POST['zip'];
	    
	    // Validate card number
	    $cardType = validateCardNumber($cardNumber);
	    if ($cardType == 'invalid') {
	        $errors['cardNumber'] = 'Invalid card number';
	    }

	    // Validate CVV
	    if (!preg_match('/^[0-9]{3,4}$/', $cvv)) {
	        $errors['cvv'] = 'Invalid CVV';
	    }
		//validate exp month and year
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
	        
	        // Add user data to database
            $dsn = "mysql:host=localhost;dbname=xkgroup;charset=utf8mb4";
	        $username = "root";
	        $password = "";
	        
	        try {
	            $pdo = new PDO($dsn, $username, $password);
	            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	        
	            $sql = "CREATE TABLE IF NOT EXISTS `xkgroup`.`user_info` (
                    `ID` INT NOT NULL AUTO_INCREMENT,
                    `userFullname` VARCHAR(100) NOT NULL,
                    `userEmail` VARCHAR(100) NOT NULL,
                    `userPhone` VARCHAR(20) NOT NULL,
                    `userCity` VARCHAR(45) NOT NULL,
                    `userAdress` VARCHAR(100) NOT NULL,
                    `userState` VARCHAR(45) NOT NULL,
                    `userCardName` VARCHAR(100) NOT NULL,
                    `userCardNumber` VARCHAR(20) NOT NULL,
                    `userExpMonth` VARCHAR(2) NOT NULL,
                    `userExpYear` VARCHAR(4) NOT NULL,
                    `useCVV` VARCHAR(4) NOT NULL,
                    `userZIP` VARCHAR(10) NOT NULL,
                    PRIMARY KEY (`ID`)
                )";
    
                $pdo->exec($sql);
                
                $stmt = $pdo->prepare("INSERT INTO user_info (userFullname, userEmail, userPhone, userCity, userAdress, userState, userCardName, userCardNumber, userExpMonth, userExpYear, userCVV, userZIP) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                $stmt->execute([$userFullname, $userEmail, $userPhone, $userCity, $userAdress, $userState, $userCardName, $hashedCardNumber, $expMonth, $expYear, $cvv, $userZip]);
            } catch(PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }
        } else {
            // Return error response
            $response = ['success' => false, 'errors' => $errors];
            echo json_encode($response);
        }
}
              
