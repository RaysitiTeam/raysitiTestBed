<?php
include 'database.php';
/**
 * Core Portfolio functions.
 */
class Portfolio{

    private $_database;
    const TABLE = "portfolios"; //NOTE: change this to suit your db table
    const TARGET_DIR = "../../img/portfolio/"; // NOTE: Change this to suit your server location
    const ALLOWED_FILE_SIZE = 500000; //NOTE: Change this to allow maximum file size to be uploaded

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
        $query = "SELECT name,category,client,description,startDate,created,files,video FROM ".self::TABLE." ;";
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

    public function createPortfolioRecord($name,$category,$client="N/A",$description="N/A",$startDate="N/A",$files="N/A",$video="N/A" ){
        $conn = $this->_database->getConnection();
        $date = date("Y-m-d");
//        echo $date;
        self::checkConnection($conn);
        $query = "INSERT INTO ".self::TABLE." (name, category, client, description, startDate, created, files, video) VALUES";
        $query .= "(";
        $query .= "'".$name."',";
        $query .= "'".$category."',";
        $query .= "'".$client."',";
        $query .= "'".$description."',";
        $query .= "'".$startDate."',";
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

    public function deletePortfolioRecord($name="N/A",$category="N/A",$client="N/A"){
        $conn = $this->_database->getConnection();
//        echo $date;
        self::checkConnection($conn);
         $query = "DELETE FROM ".self::TABLE." WHERE name = '$name' AND category = '$category' AND client = '$client'";
        if ($conn->query($query) === TRUE) {
            $conn->close();
            $this->_result_json['status'] = 'success';
            $this->_result_json['message'] = 'Record deleted successfully';
            return $this->_result_json;
        } else {
            $conn->close();
            $this->_result_json['status'] = 'error';
            $this->_result_json['message'] = "Error: " . $query . " : " . $conn->error;
            return $this->_result_json;
        }//endif:query executed successfully
    }//end:deletePortfolioRecord

    public function uploadFileToServer($inputFileObj){
      // NOTE: for debugging
      // echo $inputFileObj["tmp_name"];

      $target_file = self::TARGET_DIR . basename($inputFileObj["name"]); //Set the destination location
      $uploadOk = 1;
      $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

      // Check if image file is a actual image or fake image
      if(isset($inputFileObj)) {
          $check = getimagesize($inputFileObj["tmp_name"]);
          if($check !== false) {
              // echo "File is an image - " . $check["mime"] . "."; //NOTE: for debugging
              $uploadOk = 1;
          } else {
              // echo "File is not an image."; //NOTE: for debugging
              $uploadOk = 0;
          }//if/else
      }//endif:$inputFileObj

      // Check if file already exists
      if (file_exists($target_file)) {
          $this->_result_json['message'] =  "Sorry, file with the same name ".basename($inputFileObj["name"]). " already exists.";
          $uploadOk = 0;
      }//endif:Check if file already exists

      // Check file size
      if ($inputFileObj["size"] > self::ALLOWED_FILE_SIZE) {
          $this->_result_json['message'] = "Sorry, your file is too large.";
          $uploadOk = 0;
      }//endif:Check file size

      // Allow certain file formats
      if($imageFileType != "jpg" && $imageFileType != "JPG" && $imageFileType != "png" && $imageFileType != "PNG" && $imageFileType != "jpeg" && $imageFileType != "JPEG"
          && $imageFileType != "gif" && $imageFileType != "GIF" ) {
          $this->_result_json['message'] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
          $uploadOk = 0;
      }//endif:Allow certain file formats

      // Check if $uploadOk is set to 0 by an error
      if ($uploadOk == 0) {
          $this->_result_json['status'] = 'error';
          // $this->_result_json['message'] = "Sorry, your file was not uploaded."; //NOTE: for debugging
      // if everything is ok, try to upload file
      } else {
          $this->_result_json['status'] = 'success';
          if (move_uploaded_file($inputFileObj["tmp_name"], $target_file)) {
              $this->_result_json['message'] =  "The file ". basename( $inputFileObj["name"]). " has been uploaded.";
              $this->_result_json['path'] =  $target_file;
          } else {
              $this->_result_json['status'] = 'error';
              $this->_result_json['message'] =  "Sorry, there was an error uploading your file.";
          }
      }//endif:Check if $uploadOk is set to 0 by an error
    return $this->_result_json;
    }//end:uploadFileToServer

}//end-class:Portfolio
