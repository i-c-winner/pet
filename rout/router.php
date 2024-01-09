<?php
function router($pdo)
{
	require(__DIR__ . "/UserController.php");
	$typeController = $_GET['type'];
	$id = $_GET['id'];
	$action = $_GET['action'];
	if ($typeController === 'users') {
		$controller = new UserController();

		if ($id) {
			$sql = "SELECT * FROM users WHERE id=:id";
			$stmt = $pdo->prepare($sql);
			$stmt->bindParam(':id', $id, PDO::PARAM_INT);
			$stmt->execute();
			$controller->$action($stmt->fetch());
		} else {
			$sql = "SELECT * FROM users";
			$stmt = $pdo->prepare($sql);
			$stmt->execute();
			while ($row = $stmt->fetch()) {
				$controller->$action($row);
			}
		}
	}
}


