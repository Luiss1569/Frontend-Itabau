<?php

	include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'POST') {

		$nome =  $_POST['nome'];
		$cidade =  $_POST['cidade'];
		$telefone =  $_POST['telefone'];
		$rua =  $_POST['rua'];
		$bairro =  $_POST['bairro'];
        $lat =  $_POST['lat'];
        $long =  $_POST['long'];

        $query = "INSERT INTO `clientes` (`NOME`, `CIDADE`, `TELEFONE`, `RUA`, `BAIRRO`, `LATITUDE`, `LONGITUDE`, `ID`)
         VALUES ('$nome', '$cidade', '$telefone', '$rua', '$bairro', '$lat', '$long', NULL)";   
		 
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
