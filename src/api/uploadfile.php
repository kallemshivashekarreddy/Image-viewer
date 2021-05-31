<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$conn = mysqli_connect('127.0.0.1:3306', 'root', '1998', 'db1');
$folderPath = "/images";
if (isset($_FILES['file'])) {
    $image = $_FILES['file']['name'];
    $file = file_get_contents($_FILES['file']['tmp_name']);

    $insert = "INSERT into images VALUES('$image')";
    if (mysqli_query($conn, $insert)) {
        move_uploaded_file($_FILES['file']['tmp_name'], "./images/$image");
        echo "<script>alert('Upload successful!!')</script>";
    } else {
        echo "<script>alert('Upload Unsuccessful!!!')</script>";
    }
} else {
    echo "<script>alert('Not Found !!!')</script>";
}
// $file_tmp = $_FILES['file']['tmp_name'];
// echo $file_tmp;
// $file_ext = strtolower(end(explode('.', $_FILES['file']['tmp_name'])));
// echo $file_ext;
// $file = "$folderPath/$file_tmp" . '.' . $file_ext;
// echo $file;
// move_uploaded_file($file_tmp, $file);

// return json_encode(['status' => true]);
// echo "okk";