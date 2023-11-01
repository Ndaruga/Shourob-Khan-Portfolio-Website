<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "kingorifrancis19@gmail.com";
    $subject = "Contact Form Submission - $subject";
    $headers = "From: $email";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\n\n$message";

    if (mail($to, $subject, $message, $headers)) {
        echo "success"; // You can customize this response as needed
    } else {
        echo "error"; // You can customize this response as needed
    }
}
?>