<?php
include 'database.php';
/**
 * Core Portfolio functions.
 */
class Portfolio{

    private $_database;
    const TABLE = "portfolios";
    private $_result_json = array('status'=>'', 'message'=>'');

    function __construct(){
        $this->_database = Database::getInstance();
    }//end:__construct

    public static function checkConnection($conn){
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    }//end:checkConnection

    public function getAllPortfolioItems(){
        $conn = $this->_database->getConnection();
        //Check if connection is established
        self::checkConnection($conn);
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
        $conn->close();
    }//end:getAllPortfolioItems

    public function createPortfolioRecord($name,$category,$client="N/A",$description="N/A",$files="N/A",$video="N/A" ){
        $conn = $this->_database->getConnection();
        $date = date("Y-m-d");
//        echo $date;
        self::checkConnection($conn);
        $query = "INSERT INTO ".self::TABLE." (name, category, client, description, created, files, video) VALUES";
        $query .= "(";
        $query .= "'".$name."',";
        $query .= "'".$category."',";
        $query .= "'".$client."',";
        $query .= "'".$description."',";
        $query .= "'". $date."',";
        $query .= "'".$files."',";
        $query .= "'".$video."'";
        $query .= ")";
        if ($conn->query($query) === TRUE) {
            $conn->close();
            $this->_result_json['status'] = 'success';
            $this->_result_json['message'] = 'New record created successfully';
            return $this->_result_json;
        } else {
            $conn->close();
            $this->_result_json['status'] = 'error';
            $this->_result_json['message'] = "Error: " . $query . " : " . $conn->error;
            return $this->_result_json;
        }//endif:query executed successfully
    }//end:createPortfolioRecord

}//end-class:Portfolio