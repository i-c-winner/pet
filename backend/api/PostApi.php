<?php

class PostApi
{
	private $sql;
	private $pdo;
	public function __construct($host, $dbname, $login, $password)
	{
		$this->pdo = new PDO("mysql:host=$host; dbname=$dbname", $login, $password);
	}
	public function init($type)
	{
		if ($type == "createProject") {
			$this->createProject();
		}
	}
	private function createProject()
	{
		$fields = $_POST;
		$description = $_FILES['description'];
		$tmpName = $description['tmp_name'];
		$newFile = 'assets/projects/descriptions/' . $description['name'];
		if (copy($tmpName, $newFile)) {
			echo 'Download';
		} else {
			echo 'Dont Download';
		}

		$sql = "INSERT INTO projects(name, description) VALUES(:name, :description)";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindParam(':name', $fields['name']);
		$stmt->bindParam('description', $newFile);
		$stmt->execute();
		$this->getFile();
	}
	public function getFile()
	{
		$file = fopen('assets/projects/descriptions/Dmitriy_Constructor.pdf', 'r'); // путь к файлу на сервере
		header('Content-Description: File Transfer');
		header('Content-Type: application/pdf');
		header('Content-Disposition: attachment; filename="' . basename($file) . '"');
		header('Content-Length: ' . filesize($file));
		while (!feof($file)) {
			fread($file, 0);
		}
		fclose($file);
	}
	public function createUsers()
	{
		$fields = $_POST;
		$name = 'naem';
		$sql = "INSERT INTO projects(name, description) VALUES(:name, :description)";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindParam(':name', $fields['name']);
		$stmt->bindParam(':description', $name);
		$stmt->execute();
	}
}