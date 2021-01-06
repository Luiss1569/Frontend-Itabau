<?php
	
require_once('../src/PHPMailer.php');
require_once('../src/SMTP.php');
require_once('../src/Exception.php');
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
$mail = new PHPMailer\PHPMailer\PHPMailer(); 
$mail->IsSMTP(); // enable SMTP 
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only 
$mail->SMTPAuth = true; // authentication enabled 
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail 
$mail->Host = "itabau.com.br"; 
$mail->Port = 465; // or 587 
$mail->IsHTML(true); 
$mail->CharSet = 'UTF-8';
$mail->Username = "site@itabau.com.br"; 
$mail->Password = "Pedradobau1990@"; 
$mail->SetFrom($email);
$mail->Subject = "SITE | Nova pesquisa foi cadastrada!"; 
$mail->AltBody = "Uma nova pesquisa foi enviada por " . $nome . ".\n" . " Acesse o site para visualizar em https://itabau.com.br/painel/pesquisa" ; 

$body = "<html>
<body>
<table align=center border=1px>
<tr>
  <td colspan=2 align=center>Pesquisa</td>
</tr><tr>
  <td>Nome completo:</td><td> ".$nome."</td>
  </tr><tr>
  <td>E-mail atual:</td><td>".$email."</td>
  </tr><tr>
  <td>Nº de contato:</td><td>".$telefone."</td>
</tr><tr>
  <td>Cidade:</td><td>".$cidade. "-".$estado."</td>
  </tr><tr>
  <td>Idade:</td><td>".$idade."</td>
  </tr><tr>
  <td>O que você acha dos produtos Itabaú e suas variedades?:</td><td>".$o1.";</td>
  </tr><tr>
  <td>Se você pudesse melhorar algo em nosso produtos, o que melhoraria?:</td><td>".$o2.";</td>
  </tr><tr>
  <td>Qual o sabor que falta de picolé e sorvete de massa em nossa linha, que você acha interessante termos?:</td><td>".$o3.";</td>
  </tr><tr>
  <td>O que você acha do preço dos nossos produto?:</td><td>".$o4.";</td>
  </tr><tr>
  <td>ocê recomendaria a Itabaú para seus parentes, amigos ou companheiros?:</td><td>".$o5.";</td>
  </tr><tr>
  <td>Com qual frequência você toma sorvete?:</td><td>".$o6.";</td>
  </tr><tr>
  <td>Por favor, diga-nos o que podemos fazer para melhorar?:</td><td>".$o7.";</td>
  </tr>
  </table>
</body>
</html>
  ";

$mail->MsgHTML($body);
$mail->WordWrap = 50;
$mail->AddAddress("contato@itabau.com.br"); 
$emailTest = $mail->Send();
			$json = array(
				'result' => true,
				'email' => $emailTest
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
