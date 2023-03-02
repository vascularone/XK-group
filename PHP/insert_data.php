<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $servername = "localhost";
	$username = "username";
	$password = "";

    try {
        $pdo = new PDO($servername, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $table_name = 'Info';
        $name = $_POST['name'];
        $lastName = $_POST['lastName'];
        $sql = "INSERT INTO $table_name (firstname, lastname, email)
                VALUES ($name, 'Doe', 'john.doe@example.com')";

        $pdo->exec($sql);

        echo "Data inserted successfully.";

    } catch (PDOException $e) {
        echo "Error inserting data: " . $e->getMessage();
    }
