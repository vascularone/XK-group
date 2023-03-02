<?php

    // header('Access-Control-Allow-Origin: http://localhost:3000');
	$servername = "localhost";
	$username = "username";
	$password = "";

try {
    $pdo = new PDO($servername, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $table_name = 'Info';
    $sql = "CREATE TABLE $table_name (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        email VARCHAR(50),
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    $pdo->exec($sql);

    echo "Table $table_name created successfully.";

} catch (PDOException $e) {
    echo "Error creating table: " . $e->getMessage();
}
