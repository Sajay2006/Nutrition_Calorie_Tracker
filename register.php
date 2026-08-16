<?php

// Database connection
$host = "localhost";
$username = "root";
$password = "";
$database = "nutrition_calorie_tracker";

$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Only process POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $name = trim($_POST["fullname"]);
    $email = trim($_POST["email"]);
    $mobile = trim($_POST["mobile"]);
    $age = (int) $_POST["age"];
    $gender = $_POST["gender"];
    $height = (int) $_POST["height"];
    $weight = (int) $_POST["weight"];
    $fitness_goal = $_POST["goal"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Check password
    if ($password !== $confirm_password) {
        die("Passwords do not match.");
    }

    // Check if email already exists
    $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $result = $check->get_result();

    if ($result->num_rows > 0) {
        die("This email is already registered.");
    }

    // Securely hash password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user
    $stmt = $conn->prepare(
        "INSERT INTO users 
        (name, email, mobile, age, gender, height, weight, fitness_goal, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );

    $stmt->bind_param(
        "sssisiiss",
        $name,
        $email,
        $mobile,
        $age,
        $gender,
        $height,
        $weight,
        $fitness_goal,
        $hashed_password
    );

    if ($stmt->execute()) {
        echo "<script>
                alert('Registration successful!');
                window.location.href='login.html';
              </script>";
    } else {
        echo "Registration failed: " . $stmt->error;
    }

    $stmt->close();
    $check->close();
}

$conn->close();

?>