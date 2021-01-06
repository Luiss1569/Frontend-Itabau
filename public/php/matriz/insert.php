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

	if ($result) {
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
$mail->Subject = (isset($assunto))?"SITE | " . $assunto: "SITE | Nova mensagem foi cadastrada!"; 
$mail->AltBody = "Uma nova pesquisa foi enviada por " . $nome . ".\n" . " Acesse o site para visualizar em https://itabau.com.br/painel/pesquisa" ; 

$body = "<html>
<body>
<table align=center border=1px>
<tr>
  <td colspan=2 align=center>CONTATO</td>
</tr><tr>
  <td>Nome completo:</td><td> ".$nome."</td>
  </tr><tr>
  <td>E-mail atual:</td><td>".$email."</td>
  </tr><tr>
  <td>Nº de contato:</td><td>".$telefone."</td>
</tr><tr>
  <td>Cidade:</td><td>".$cidade. "-".$estado."</td>
  </tr><tr>
  <td>Assunto:</td><td>".$assunto."</td>
  </tr><tr>
  <td>Mensagem:</td><td>".$mensagem.";</td>
  </tr>
  </table>
</body>
</html>
  ";

$mail->MsgHTML($body);
$mail->WordWrap = 50;
$mail->AddAddress("contato@itabau.com.br"); 
$emailTest = $mail->Send();
if($result) {
 
		$json = array(
			'result' => true,
			'msg' => $emailTest,
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
}
