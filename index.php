<?php 
$json_file = "json/urls.json";

if(isset($_GET['set_data'])){
    unlink($json_file);
    file_put_contents($json_file, $_GET['set_data']);
}else if(isset($_GET['get_data'])){
    echo file_get_contents($json_file);
}

?>