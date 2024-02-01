<?php
namespace Controller;

class Controller
{

	public function getItem($user)
	{
		return json_encode($user);
	}
	public function addItem($data)
	{
	}
	public function removeItem($id)
	{

	}
	public function updateItem($id, $parametrs)
	{

	}
}
class UserController extends Controller
{

}
class ProjectController extends Controller
{

}