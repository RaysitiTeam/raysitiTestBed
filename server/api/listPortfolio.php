<?php
include '../core/portfolio.php';
/**
 * API: List Portfolio
 */
$portfolioObj = new Portfolio();

$resultArray = $portfolioObj->getAllPortfolioItems(); //returns a JSON object

echo $resultArray;

