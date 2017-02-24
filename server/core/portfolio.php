<?php
include 'database.php';
/**
 * Core Portfolio functions.
 */
class Portfolio{

    private $_database;
    const TABLE = "portfolios";

    function __construct(){
        $this->_database = Database::getInstance();
    }//end:__construct

    public function getAllPortfolioItems(){
        $conn = $this->_database->getConnection();
        //var_dump($conn);
        $query = "SELECT name,category,client,description,created,files FROM ".self::TABLE." ;";
        $result = $conn->query($query);
        //var_dump($result);
        if ($result = $conn->query($query)) {
            while($row = $result->fetch_array()) {
                $myArray[] = $row;
            }
            return json_encode($myArray); //FIXME : This should return a value
        }else{
            trigger_error('Failed to produce JSON');
        }//endif:there is a result
    }//end:getAllPortfolioItems
    
}//end:Portfolio