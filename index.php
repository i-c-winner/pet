<?php
require_once __DIR__ . "/rout/routers.php";
$pdo = new PDO("mysql: host=localhost; dbname=pet_project", "root", "");
routers($pdo);



