<?php

	include '../conexao.php';

	if ($_SERVER["REQUEST_METHOD"] == 'GET') {

        $lat = $_GET['lat'];
        $long = $_GET['long'];
        $limit = $_GET['limit'];
        //-22.6880019 -45.7321654
        //http://localhost/php/cliente/get.php?lat=-22.6880019&long=-45.7321654
        $query = "SELECT *, (6371 * acos( cos( radians($lat) ) * cos( radians( LATITUDE ) ) * cos( radians( LONGITUDE ) - 
        radians($long) ) + sin( radians($lat) ) * sin( radians( LATITUDE ) ) ) ) AS distancia FROM clientes 
        HAVING distancia < 30 ORDER BY distancia ASC LIMIT $limit";   
		 
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
