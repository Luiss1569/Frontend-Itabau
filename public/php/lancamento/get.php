<?php

include '../conexao.php';

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    
    $query = "SELECT * FROM `lancamento` WHERE ID = 1";

    $result = mysqli_query($link, $query);

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Max-Age: 1728000');
    header("Content-Length: 0");
    header("Content-type:application/json");

    if (true) {
        while($row = mysqli_fetch_assoc($result)){
            $encode = $row;
        }

        $jsonstring = json_encode($encode);
        echo $jsonstring;
    } else {
        $json = array(
            'result' => false
        );
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }

    mysqli_close($link);
} else {
    echo 'error';
}
