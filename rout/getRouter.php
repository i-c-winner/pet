<?php

namespace Router;

use \Controller\UserController;

require(__DIR__ . "/UserController.php");

function getRouter($pdo)
{
	function printData($result)
	{
		print_r($result);
	}
	$typeController = $_GET['type'];
	$id = $_GET['id'];
	$action = $_GET['action'];
	if ($typeController === 'users') {
		$controller = new UserController();
		if ($id) {

			$sql = "SELECT * FROM users WHERE id=:id";
			$stmt = $pdo->prepare($sql);
			$stmt->bindParam(':id', $id, \PDO::PARAM_INT);
			$stmt->execute();
			$result = $controller->$action($stmt->fetch());
			printData($result);
		} else {
			$sql = "SELECT * FROM users";
			$stmt = $pdo->prepare($sql);
			$stmt->execute();
			$result = [];
			while ($row = $stmt->fetch()) {
				$result[] = $controller->$action($row);

			}
			printData($result);
		}
	}
}
