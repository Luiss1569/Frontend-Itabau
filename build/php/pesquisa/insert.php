<?php

	include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'POST') {

		$nome =  $_POST['nome'];
		$email =  $_POST['email'];
		$telefone =  $_POST['telefone'];
		$cidade =  $_POST['cidade'];
		$estado =  $_POST['estado'];
		$idade =  $_POST['idade'];
        $o1 =  $_POST['o1'];
        $o2 =  $_POST['o2'];
        $o3 =  $_POST['o3'];
        $o4 =  $_POST['o4'];
        $o5 =  $_POST['o5'];
        $o6 =  $_POST['o6'];
        $o7 =  $_POST['o7'];

        $query = "INSERT INTO `opinao` (`NOME`, `EMAIL`, `CIDADE`, `TELEFONE`, `IDADE`, `ESTADO`, `O1`, `O2`, `O3`, `O4`, `O5`, `O6`, `O7`, `ID`, `DATATIME`) 
        VALUES ('$nome', '$email', '$cidade', '$telefone', '$idade', '$estado', '$o1', '$o2', '$o3', '$o4', '$o5', '$o6', '$o7', NULL, current_timestamp())";   
		 
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
