<?php
include '../core/portfolio.php';
/*STEP1: Get the XHR Request*/
//$entityBody = file_get_contents('php://input');
$inputFile = $_FILES["file"];

// NOTE: for debugging
// echo var_dump($inputFile);
// echo basename($_FILES["file"]["name"]);

// $target_file = "../../img/portfolio/" . basename($inputFile["name"]); //Set the destination location
// move_uploaded_file($inputFile["tmp_name"], $target_file);

//STEP3: Create instance of Portfolio
$portfolioObj = new Portfolio();

//Step4: Get the return value
$status = $portfolioObj->uploadFileToServer($inputFile); //store into server location
header('Content-type: application/json');
echo json_encode($status);
// echo var_dump($inputFile); // NOTE: for debugging
