<?php

/*STEP1: Get the XHR Request*/
$entityBody = file_get_contents('php://input');
$inputFile = $_FILES["file"];


echo $entityBody;
echo var_dump($inputFile);
