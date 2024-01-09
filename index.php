<?php
require_once __DIR__ . "/rout/router.php";
$pdo = new PDO("mysql: host=localhost; dbname=pet_project", "root", "");
router($pdo);



