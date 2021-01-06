<?php

	// include './conexao.php';

		header("Access-Control-Allow-Origin: *");
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: *');
		header('Access-Control-Max-Age: 1728000');
		header("Content-Length: 0");
		header("Content-type:application/json");

		$json = array(
			'server' => 'true',
			'database' => 'true'
		);
		$jsonstring = json_encode($json);
		echo $jsonstring;
		// mysqli_close($link);
	
?>
