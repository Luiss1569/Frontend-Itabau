<?php

	//include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'GET') {

        $city = $_GET['city'];
		$name = $_GET['name'];

		$query = "";
		if(empty($name)){
			$query = "SELECT DISTINCT CIDADE FROM clientes WHERE LOWER( clientes.CIDADE ) LIKE  '%$city%' GROUP BY CIDADE LIMIT 10";  
			echo $name;
		}else{
			$query = "SELECT LATITUDE, LONGITUDE FROM clientes WHERE LOWER( clientes.CIDADE ) =  '$name' LIMIT 1";  
			echo $city;
		}

		echo $query;

		return;
		$result = mysqli_query($link, $query);
        
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
        mysqli_close($link);
	}else{
		echo 'error';
	}
?>
