<?php

include '../conexao.php';

if ($_SERVER["REQUEST_METHOD"] == 'POST') {

    $title =  $_POST['title'];
    $options =  $_POST['options'];

    if (isset($_FILES['pic'])) {
        $ext = strtolower(substr($_FILES['pic']['name'], -4)); 
        $new_name = date("Y.m.d-H.i.s") . $ext;
        $image = "/lancamento/imagens/". $new_name;
        $dir = './imagens/'; //Diretório para uploads 
        move_uploaded_file($_FILES['pic']['tmp_name'], $dir . $new_name); 
    }else{
        $image = $_POST['image'];
    }
    
    $query = "UPDATE `lancamento` SET `TITULO` = '$title', `OPCOES` = '$options', `IMAGEM` = '$image' WHERE `lancamento`.`ID` = 1";

    $result = mysqli_query($link, $query);

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Max-Age: 1728000');
    header("Content-Length: 0");
    header("Content-type:application/json");

    if (true) {
        $json = array(
            'result' => true
        );
        $jsonstring = json_encode($json);
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
