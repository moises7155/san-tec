<?php
include("conexion.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

mysqli_set_charset($conexion, "utf8");

$email= $request ->email;
$password = $request ->password;

$query = " SELECT * FROM usuario WHERE email = BINARY '".$email."' AND password
 = BINARY '".$password."'";

$respuesta = mysqli_query($conexion, $query);
if(mysqli_num_rows($respuesta) > 0){
    echo json_encode(1);
}else{
    echo json_encode(0);
}
mysqli_close($conexion);