<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

if (isset($_GET['id'])) {
    $menu_id = filter_var($_GET['id'], FILTER_VALIDATE_INT, [
        'options' => [
            'default' => 'menus',
            'min_range' => 1
        ]
    ]);
} else {
    $menu_id = 'menus';
}

$sql = is_numeric($menu_id) ? "SELECT * FROM `menu` WHERE id='$menu_id'" : "SELECT * FROM `menu`";
$stmt = $conn->prepare($sql);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    $menu_array = [];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $menu_data = [
            'id' => $row['id'],
            'nombre_menu' => $row['nombre_menu'],
            'icon' => $row['icon'],
            'link' => $row['link'],
        ];
        array_push($menu_array, $menu_data);
    }
    echo json_encode($menu_array);
} else {
    echo json_encode(['message' => 'No hay se encontro ningun menu']);
}
