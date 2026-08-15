const foodImage = document.getElementById("foodImage");

const preview = document.getElementById("preview");

const scanButton = document.getElementById("scanButton");


/* SHOW IMAGE PREVIEW */

foodImage.addEventListener("change", function () {

    const file = foodImage.files[0];

    if (file) {

        const imageURL = URL.createObjectURL(file);

        preview.src = imageURL;

        preview.style.display = "block";
    }

});


/* SCAN FOOD */

scanButton.addEventListener("click", function () {

    if (!foodImage.files.length) {

        alert("Please select a food image first.");

        return;
    }


    /*
       DEMO RESULT

       Later we can connect this
       to your database / AI food scanner.
    */

    document.getElementById("foodName").textContent =
        "Sample Food";

    document.getElementById("calories").textContent =
        "250 kcal";

    document.getElementById("protein").textContent =
        "8 g";

    document.getElementById("carbs").textContent =
        "35 g";

    document.getElementById("fat").textContent =
        "10 g";

});