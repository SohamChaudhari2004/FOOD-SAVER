<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "database123";

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User is authenticated, you can set session variables here.
    echo "Login successful!";
} else {
    echo "Login failed. Please try again.";
}

$conn->close();
?>
