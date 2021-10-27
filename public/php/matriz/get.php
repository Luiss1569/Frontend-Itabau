<?php

	include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'GET') {


        $query = "SELECT * FROM mensagem ORDER BY DATATIME DESC";   
		 
		$result = mysqli_query($link, $query);
        mysqli_close($link);
        
		header("Access-Control-Allow-Origin: *");
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: *');
		header('Access-Control-Max-Age: 1728000');
		header("Content-Length: 0");
		header("Content-type:application/json");
		
		if($result){
			if(mysqli_num_rows($result) === 0 ){
                $json = array(
                    'data' => true
                );
                $jsonstring = json_encode($json);
                echo $jsonstring;
            }else{
                while($row = mysqli_fetch_assoc($result)){
                    $encode[] = $row;
                }
    
                $jsonstring = json_encode($encode);
                echo $jsonstring;
            }
		}else{
			$json = array(
				'result' => false
			);
			$jsonstring = json_encode($json);
			echo $jsonstring;
		}
		
	}else{
		echo 'error';
	}
	?>
