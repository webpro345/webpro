<?php
class Home extends CI_Controller
{
	function __construct()
	{
		parent::__construct();
	}

	function index()
	{
		$data = array(
			'ten'=>'tran khanh toan'
		);
		$this->load->view('home',$data);
	}
}