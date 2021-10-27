<?php

	include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'POST') {

		$id =  $_POST['danoninho'];

        $query = "DELETE FROM `clientes` WHERE `clientes`.`ID` = $id";   
		 
		$result = mysqli_query($link, $query);

		header("Access-Control-Allow-Origin: *");
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: *');
		header('Access-Control-Max-Age: 1728000');
		header("Content-Length: 0");
		header("Content-type:application/json");
		
		if($result){
			$json = array(
				'result' => true
			);
			$jsonstring = json_encode($json);
			echo $jsonstring;
		}else{
			$json = array(
				'result' => false
			);
			$jsonstring = json_encode($json);
			echo $jsonstring;
		}

		mysqli_close($link);
		
	}else{
		echo 'error';
	}
?>
