<?php
include '../core/portfolio.php';
/*STEP1: Get the XHR Request*/
//$entityBody = file_get_contents('php://input');
$inputFile = $_FILES["file"];

//STEP3: Create instance of Portfolio
$portfolioObj = new Portfolio();

//Step4: Get the return value
$status = $portfolioObj->uploadFileToServer($inputFile); //store into server location
header('Content-type: application/json');
echo json_encode($status);
//echo var_dump($inputFile);