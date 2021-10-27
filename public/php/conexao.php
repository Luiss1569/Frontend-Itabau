<?php

$HOST = "localhost";
$USER = "itabauco_web";
$PASSWORD = "TuOp+nd^Wpv%";
$BD = "itabauco_web";

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