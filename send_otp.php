<?php

session_start();

require 'db.php';
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: forgot_password.php");
    exit();
}

$email = trim($_POST["email"]);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email address.");
}

/* Check user */

$stmt = $conn->prepare("SELECT id, fullname FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die("No account found with this email address.");
}

$user = $result->fetch_assoc();

/* Generate OTP */

$otp = random_int(100000, 999999);

$_SESSION["reset_email"] = $email;
$_SESSION["reset_otp"] = $otp;
$_SESSION["otp_time"] = time();

/* Send Email */

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username = 'YOUR_GMAIL@gmail.com';
    $mail->Password = 'YOUR_16_DIGIT_APP_PASSWORD';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom(
        'YOUR_GMAIL@gmail.com',
        'Nutrition Tracker'
    );

    $mail->addAddress($email, $user["fullname"]);

    $mail->isHTML(true);

    $mail->Subject = 'Nutrition Tracker - Password Reset OTP';

    $mail->Body = "
        <div style='font-family:Arial;padding:20px'>
            <h2 style='color:#176b45'>
                Nutrition Tracker
            </h2>

            <p>Hello {$user["fullname"]},</p>

            <p>
                Your password reset OTP is:
            </p>

            <h1 style='letter-spacing:8px;color:#176b45'>
                {$otp}
            </h1>

            <p>
                This OTP is valid for 5 minutes.
            </p>

            <p>
                If you did not request a password reset,
                please ignore this email.
            </p>
        </div>
    ";

    $mail->send();

    header("Location: verify_otp.php");
    exit();

} catch (Exception $e) {

    echo "OTP could not be sent.";
    echo "<br>Mailer Error: " . $mail->ErrorInfo;
}
?>