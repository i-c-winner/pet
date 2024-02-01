<?php
function routers($pdo)
{
	require(__DIR__ . "/getRouter.php");
	$method = $_SERVER["REQUEST_METHOD"];
	if ($method === "GET") {
		\Router\getRouterGet($pdo);
	}
}
