<?php

$HOST = "localhost";
$USER = "root";
$PASSWORD = "";
$BD = "itabau";

$link = mysqli_connect($HOST, $USER, $PASSWORD, $BD);

if (!$link) {
    $jsonData = array(
        'error' => 'Error for connect the database',
    );
    $jsonstringData = json_encode($jsonData);
    echo $jsonstringData;
    exit;
}

?>