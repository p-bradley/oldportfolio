<?php

if(empty($_POST)){
    echo 'empty...';
    exit;
}

$name = "";
$email = "";
$subject = '';
$message = "";
$recipient = 'p_bradley@fanshaweonline.ca';

if(isset($_POST['name'])) {
    $name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
}


if(isset($_POST['email'])) {
    $email = str_replace(array("\r","\n","%0a","%0d"),'',$_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
}


if(isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
}


if(isset($_POST['message'])){
    $message = $_POST['message'];
}


if(mail($recipient, $subject, $message)){
    echo '<p>Thank you for contacting me. We will be in touch shortly</p>';
}else{
    echo '<p>Error: Email not sent, try restarting.</p>';
}

?>