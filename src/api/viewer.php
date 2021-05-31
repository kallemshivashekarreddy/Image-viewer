<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
$conn = mysqli_connect('127.0.0.1', 'root', '1998', 'db1');
$read = "SELECT distinct image from images  ";
$result = mysqli_query($conn, $read);
$num = mysqli_num_rows($result);
$posts_arr = array();
$posts_arr['data'] = array();
$posts_arr['data1'] = array();
if ($num > 0) {

    while ($row = mysqli_fetch_assoc($result)) {
        array_push($posts_arr['data'], $row);
    }
    //Turn into json

}
echo json_encode($posts_arr);
