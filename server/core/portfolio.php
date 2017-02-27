<?php
include 'database.php';
/**
 * Core Portfolio functions.
 */
class Portfolio{

    private $_database;
    const TABLE = "portfolios";
    const TARGET_DIR = "img/portfolio/"; // Change this to suit your server location

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

    public function uploadFileToServer(inputFileObj){
      $target_file = TARGET_DIR . basename(inputFileObj["name"]); //Set the destination location
      $uploadOk = 1;
      $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
      // Check if image file is a actual image or fake image
      if(isset($_POST["submit"])) {
          $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
          if($check !== false) {
              echo "File is an image - " . $check["mime"] . ".";
              $uploadOk = 1;
          } else {
              echo "File is not an image.";
              $uploadOk = 0;
          }
      }
      // Check if file already exists
      if (file_exists($target_file)) {
          echo "Sorry, file already exists.";
          $uploadOk = 0;
      }
      // Check file size
      if ($_FILES["fileToUpload"]["size"] > 500000) {
          echo "Sorry, your file is too large.";
          $uploadOk = 0;
      }
      // Allow certain file formats
      if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
          && $imageFileType != "gif" ) {
          echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
          $uploadOk = 0;
      }
      // Check if $uploadOk is set to 0 by an error
      if ($uploadOk == 0) {
          echo "Sorry, your file was not uploaded.";
      // if everything is ok, try to upload file
      } else {
          if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
              echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
          } else {
              echo "Sorry, there was an error uploading your file.";
          }
      }
    }//end:uploadFileToServer

}//end-class:Portfolio
