<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
$conn = mysqli_connect('127.0.0.1', 'root', '1998', 'db1');


$image = $_POST['filedelete'];
unlink("images/$image");
$delete = "DELETE FROM images WHERE  image='$image'";
if (mysqli_query($conn, $delete)) {
    echo "<script>alert('Image Deleted!!')</script>";
} else {
    echo "<script>alert('Image not Deleted!!')</script>";
}
