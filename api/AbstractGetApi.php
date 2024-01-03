<?php
namespace AbstractGetApi;

abstract class AbstractApi
{
	protected $pdo;
	protected $as;
	public function __construct($host, $dbname, $login, $password)
	{
		$this->pdo = new \PDO("mysql:host=$host; dbname=$dbname", $login, $password);
		$this->as = 'Trish';
	}
	// abstract public function init($table);
	abstract protected function createanswer($answer);
	abstract protected function send($value);

}