<?php
require_once(__DIR__ . "/api/GetApiAllItems.php");
$method = $_SERVER["REQUEST_METHOD"];
if ($method === "GET") {
	$instanceAll = new GetApiAllItems('localhost', 'pet_project', 'root', '');
	$instanceAll->init('users', 2);
} else {
	echo "POST";
}

