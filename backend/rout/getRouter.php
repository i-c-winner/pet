<?php

namespace Router;

use \Controller\UserController;

require(__DIR__ . "/Controller.php");
function getRouterGet($pdo)
{
	function printData($result)
	{
		print_r(json_encode($result));
	}
	$typeController = $_GET['type'];
	$id = $_GET['id'];
	$action = $_GET['action'];
	// if ($typeController === 'users') {
	$controller = new UserController();
	if ($id) {

		$sql = "SELECT * FROM $typeController WHERE id=:id";
		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(':id', $id, \PDO::PARAM_INT);
		$stmt->execute();
		$result = $controller->$action($stmt->fetch());
		printData($result);
	} else {
		$sql = "SELECT * FROM $typeController";
		$stmt = $pdo->prepare($sql);
		$stmt->execute();
		$result = [];
		while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
			$result[] = $controller->$action($row);
		}
		printData($result);
	}
	// }

}
function getRouterPost($pdo)
{

}
