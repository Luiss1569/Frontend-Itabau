<?php

	include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'POST') {

		$nome =  $_POST['nome'];
		$email =  $_POST['email'];
		$telefone =  $_POST['telefone'];
		$cidade =  $_POST['cidade'];
		$estado =  $_POST['estado'];
		$assunto =  $_POST['assunto'];
        $mensagem =  $_POST['mensagem'];

        $query = "INSERT INTO `mensagem` (`NOME`, `EMAIL`, `TELEFONE`, `CIDADE`, `ESTADO`, `ASSUNTO`, `MENSAGEM`, `ID`, `DATATIME`)
		 VALUES ('$nome', '$email', '$telefone', '$cidade', '$estado', '$assunto', '$mensagem', NULL, current_timestamp())";   
		 
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
