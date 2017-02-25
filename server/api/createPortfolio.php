<?php
include '../core/portfolio.php';
/**
 * API: Create Portfolio
 */
/*STEP1: Get the XHR Request*/
$entityBody = file_get_contents('php://input');
$inputPostRequest = stripslashes($entityBody);
$response = json_decode($inputPostRequest);
/*Step2: Parse Values*/
$name = $response->{'name'};
$category = $response->{'category'};
$client = $response->{'client'};
$description = $response->{'description'};
$files = $response->{'files'};
$video = $response->{'video'};

//STEP3: Create instance of Portfolio
$portfolioObj = new Portfolio();

//Step4: Get the return value
$status = $portfolioObj->createPortfolioRecord($name,$category,$client,$description,$files,$video); //store into database
header('Content-type: application/json');
echo json_encode($status);