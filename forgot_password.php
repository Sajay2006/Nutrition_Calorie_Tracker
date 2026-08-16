<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password | Nutrition Tracker</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background:
                linear-gradient(rgba(10,40,25,.65), rgba(10,40,25,.65)),
                url("images/healthy-food.jpg") center/cover no-repeat;
        }

        .card {
            width: 390px;
            padding: 35px;
            background: rgba(255,255,255,.95);
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,.25);
            text-align: center;
        }

        .icon {
            font-size: 48px;
            margin-bottom: 12px;
        }

        h2 {
            color: #176b45;
            margin-bottom: 10px;
        }

        p {
            color: #666;
            margin-bottom: 25px;
        }

        input {
            width: 100%;
            padding: 14px;
            margin-bottom: 18px;
            border: 1px solid #ddd;
            border-radius: 10px;
            outline: none;
            font-size: 15px;
        }

        input:focus {
            border-color: #27ae60;
        }

        button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 10px;
            background: #176b45;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #0f5033;
        }

        .back {
            display: block;
            margin-top: 20px;
            color: #176b45;
            text-decoration: none;
        }
    </style>
</head>

<body>

<div class="card">

    <div class="icon">🔐</div>

    <h2>Forgot Password?</h2>

    <p>Enter your registered Gmail address to receive an OTP.</p>

    <form action="send_otp.php" method="POST">

        <input
            type="email"
            name="email"
            placeholder="Enter your Gmail address"
            required
        >

        <button type="submit">
            Send OTP
        </button>

    </form>

    <a href="login.html" class="back">
        ← Back to Login
    </a>

</div>

</body>
</html>