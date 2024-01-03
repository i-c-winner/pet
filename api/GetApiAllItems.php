<?php
// use AbstractGetApi;
// namespace GetApiAllItems;
require_once(__DIR__ . "/AbstractGetApi.php");


class GetApiAllItems extends AbstractGetApI\AbstractApi
{

	public function init($table, $id = null)
	{
		$query = $id !== null ? "SELECT * FROM $table WHERE id=$id" : "SELECT * FROM $table";
		$answer = $this->pdo->query($query);
		$this->createanswer($answer);
	}
	public function createanswer($answer)
	{
		$resutl = [];
		while ($row = $answer->fetch()) {
			$this->send($row['name']);
		}
	}
	protected function send($value)
	{
		echo $value;
	}
}
