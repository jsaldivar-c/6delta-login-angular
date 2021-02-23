<?php
include_once("database.php");

$postdata = file_get_contents("php://input");
$request  = json_decode($postdata);

if (isset($postdata) && !empty($postdata)) {
    $usuario = mysqli_real_escape_string($mysqli, trim($request->usuario));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $sql = "SELECT * FROM usuarios where usuario='$usuario' and password='$password'";

    if ($result = mysqli_query($mysqli, $sql)) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    } else {
        http_response_code(404);
    }
}
