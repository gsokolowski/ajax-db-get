<?php

    require '../db/database.php';

    if ( isset($_GET['name']) === true && empty($_GET['name']) === false) {

        $name = trim($_GET['name']);
        //$name = 'Greg';

        $pdo = Database::connect();
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "SELECT * FROM names where name = ?";
            $q = $pdo->prepare($sql);
            $q->execute(array($name));
            $data = $q->fetch(PDO::FETCH_ASSOC);

        Database::disconnect();

        //var_dump($data);
        if($data['location'] != '') {
            echo $data['location'];
        } else {
            echo 'Location not found for this name';
        }

    }
?>