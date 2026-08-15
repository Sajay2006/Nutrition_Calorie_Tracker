/* =====================================================
   NUTRITRACK SETTINGS JAVASCRIPT
===================================================== */


/* =========================
   PAGE LOAD
========================= */

document.addEventListener("DOMContentLoaded", function () {

    loadTheme();
    loadNotifications();
    loadLanguage();
    loadPreferences();

    checkPasswordStrength();

});


/* =========================
   PASSWORD SHOW / HIDE
========================= */

function togglePassword(id, icon) {

    const input = document.getElementById(id);

    if (!input) return;

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }
}


/* =========================
   PASSWORD STRENGTH
========================= */

function checkPasswordStrength() {

    const password =
        document.getElementById("newPassword").value;

    const bars =
        document.querySelectorAll(".strength-line span");

    const strengthText =
        document.getElementById("strengthText");

    bars.forEach(function (bar) {
        bar.style.background = "#dce8df";
    });


    if (password.length === 0) {

        strengthText.textContent =
            "Use 8+ characters with letters and numbers.";

        return;
    }


    let score = 0;


    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    for (let i = 0; i < score; i++) {
        bars[i].style.background = "#25b85c";
    }


    if (score <= 1) {

        strengthText.textContent = "Weak password";

    } else if (score === 2) {

        strengthText.textContent = "Medium password";

    } else if (score === 3) {

        strengthText.textContent = "Strong password";

    } else {

        strengthText.textContent = "Very strong password";

    }

}


/* =========================
   PASSWORD MATCH
========================= */

function checkPasswordMatch() {

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("passwordMessage");


    if (!confirmPassword) {

        message.textContent = "";
        message.className = "password-message";

        return;
    }


    if (newPassword !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        message.className =
            "password-message error";

    } else {

        message.textContent =
            "Passwords match.";

        message.className =
            "password-message success";

    }

}


/* =========================
   CHANGE PASSWORD
========================= */

function changePassword() {

    const currentPassword =
        document.getElementById("currentPassword").value.trim();

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("passwordMessage");


    /* Current password */

    if (!currentPassword) {

        showPasswordError(
            "Please enter your current password."
        );

        document.getElementById("currentPassword").focus();

        return;
    }


    /* New password */

    if (!newPassword) {

        showPasswordError(
            "Please enter a new password."
        );

        document.getElementById("newPassword").focus();

        return;
    }


    /* Minimum length */

    if (newPassword.length < 8) {

        showPasswordError(
            "New password must contain at least 8 characters."
        );

        document.getElementById("newPassword").focus();

        return;
    }


    /* Letter validation */

    if (!/[A-Za-z]/.test(newPassword)) {

        showPasswordError(
            "Password must contain at least one letter."
        );

        return;
    }


    /* Number validation */

    if (!/[0-9]/.test(newPassword)) {

        showPasswordError(
            "Password must contain at least one number."
        );

        return;
    }


    /* Confirm password */

    if (!confirmPassword) {

        showPasswordError(
            "Please confirm your new password."
        );

        document.getElementById("confirmPassword").focus();

        return;
    }


    /* Match */

    if (newPassword !== confirmPassword) {

        showPasswordError(
            "New password and confirm password do not match."
        );

        document.getElementById("confirmPassword").focus();

        return;
    }


    /* Same password */

    if (currentPassword === newPassword) {

        showPasswordError(
            "New password should be different from your current password."
        );

        return;
    }


    /* Success */

    message.textContent =
        "Password updated successfully.";

    message.className =
        "password-message success";


    /*
       Clear password fields after successful validation
    */

    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";


    checkPasswordStrength();

}


/* =========================
   PASSWORD ERROR
========================= */

function showPasswordError(text) {

    const message =
        document.getElementById("passwordMessage");

    message.textContent = text;

    message.className =
        "password-message error";
}


/* =========================
   THEME
========================= */

function setTheme(theme) {

    const lightButton =
        document.getElementById("lightTheme");

    const darkButton =
        document.getElementById("darkTheme");


    if (theme === "dark") {

        document.body.classList.add("dark-mode");

        localStorage.setItem(
            "nutritrackTheme",
            "dark"
        );


        lightButton.classList.remove("active");
        darkButton.classList.add("active");


        lightButton.querySelector(".check").className =
            "fa-regular fa-circle check";

        darkButton.querySelector(".check").className =
            "fa-solid fa-circle-check check";


    } else {

        document.body.classList.remove("dark-mode");

        localStorage.setItem(
            "nutritrackTheme",
            "light"
        );


        darkButton.classList.remove("active");
        lightButton.classList.add("active");


        darkButton.querySelector(".check").className =
            "fa-regular fa-circle check";

        lightButton.querySelector(".check").className =
            "fa-solid fa-circle-check check";

    }

}


/* =========================
   LOAD THEME
========================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("nutritrackTheme") || "light";

    setTheme(savedTheme);

}


/* =========================
   NOTIFICATIONS
========================= */

function saveNotifications() {

    const settings = {

        water:
            document.getElementById("waterReminder").checked,

        exercise:
            document.getElementById("exerciseReminder").checked,

        meal:
            document.getElementById("mealReminder").checked,

        weekly:
            document.getElementById("weeklyReport").checked

    };


    localStorage.setItem(
        "nutritrackNotifications",
        JSON.stringify(settings)
    );

}


/* =========================
   LOAD NOTIFICATIONS
========================= */

function loadNotifications() {

    const saved =
        localStorage.getItem("nutritrackNotifications");

    if (!saved) return;


    try {

        const settings = JSON.parse(saved);


        document.getElementById("waterReminder").checked =
            settings.water;

        document.getElementById("exerciseReminder").checked =
            settings.exercise;

        document.getElementById("mealReminder").checked =
            settings.meal;

        document.getElementById("weeklyReport").checked =
            settings.weekly;


    } catch (error) {

        console.log(
            "Notification settings could not be loaded."
        );

    }

}


/* =========================
   SCHEDULE
========================= */

function openSchedule() {

    const time =
        prompt(
            "Enter reminder time (example: 08:00 AM):"
        );


    if (!time) return;


    localStorage.setItem(
        "nutritrackReminderTime",
        time
    );


    document.getElementById("scheduleText").textContent =
        "Reminder set for " + time;

}


/* =========================
   LANGUAGE
========================= */

function saveLanguage(language) {

    localStorage.setItem(
        "nutritrackLanguage",
        language
    );

}


function loadLanguage() {

    const saved =
        localStorage.getItem("nutritrackLanguage");

    if (!saved) return;


    const select =
        document.getElementById("language");

    if (select) {

        select.value = saved;

    }

}


/* =========================
   PREFERENCES
========================= */

function savePreference(key, value) {

    localStorage.setItem(
        "nutritrack_" + key,
        value
    );

}


function loadPreferences() {

    const unit =
        localStorage.getItem(
            "nutritrack_measurementUnit"
        );

    const date =
        localStorage.getItem(
            "nutritrack_dateFormat"
        );

    const sound =
        localStorage.getItem(
            "nutritrack_notificationSound"
        );


    if (unit) {

        document.getElementById(
            "measurementUnit"
        ).value = unit;

    }


    if (date) {

        document.getElementById(
            "dateFormat"
        ).value = date;

    }


    if (sound !== null) {

        document.getElementById(
            "notificationSound"
        ).checked = sound === "true";

    }

}


/* =========================
   NOTIFICATION SOUND
========================= */

function saveSoundSetting() {

    const enabled =
        document.getElementById(
            "notificationSound"
        ).checked;


    localStorage.setItem(
        "nutritrack_notificationSound",
        enabled
    );

}


/* =========================
   PRIVACY
========================= */

function showPrivacy(section) {

    alert(
        section +
        " settings will be connected to your account database."
    );

}


/* =========================
   DELETE ACCOUNT
========================= */

function deleteAccountWarning() {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete your account?"
        );


    if (confirmDelete) {

        alert(
            "Account deletion will be connected to Supabase/database in the next step."
        );

    }

}


/* =========================
   SAVE PROFILE
========================= */

function saveProfile() {

    const name =
        document.getElementById("profileName").value.trim();

    const email =
        document.getElementById("profileEmail").value.trim();

    const mobile =
        document.getElementById("profileMobile").value.trim();


    if (!name) {

        alert("Please enter your full name.");

        return;
    }


    if (!email) {

        alert("Please enter your email.");

        return;
    }


    localStorage.setItem(
        "nutritrackProfile",
        JSON.stringify({
            name: name,
            email: email,
            mobile: mobile
        })
    );


    alert("Profile saved successfully!");

}