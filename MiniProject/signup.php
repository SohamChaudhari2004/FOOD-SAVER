<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$server_name = 'localhost';
$username = 'root';
$password = '';
$database_name = 'database123';

$conn = mysqli_connect('localhost', 'root', '', 'test1');

if (!$conn) {
    die("Connection Failed! : " . mysqli_connect_error());
}

if (isset($_POST['save'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql_query = "INSERT INTO signup_details (username, email, password)
                  VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $sql_query)) {
    echo "New signup successful!";
} else {
    echo "Error: " . $sql_query . " " . mysqli_error($conn);
}


    mysqli_close($conn);
}
?>
