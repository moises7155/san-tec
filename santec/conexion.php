<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

$server = "localhost";
$user = "root";
$pass = "";
$bd = "san-tec";


$conexion = mysqli_connect($server, $user, $pass, $bd);