// ===============================
// NUTRITRACK DASHBOARD JAVASCRIPT
// ===============================

const foodData = {
    apple: {
        name: "Apple",
        calories: "95 kcal",
        protein: "0.5 g",
        carbs: "25 g",
        fat: "0.3 g",
        fiber: "4.4 g",
        image: "image/apple.jpg"
    },
/* ================= HEALTHY DRINKS ================= */

ilaneer:{
    image:"image/ilaneer.jpg",
    category:"Healthy Drink",
    calories:"19 kcal",
    protein:"0.7 g",
    carbs:"3.7 g",
    fat:"0.2 g",
    fiber:"1.1 g",
    vitamins:"Vitamin C, Potassium",

    benefits:
    "💧 Supports hydration<br>" +
    "⚡ Contains electrolytes<br>" +
    "🌿 Refreshing natural drink",

    risk:
    "⚠️ Best consumed in a reasonable quantity.<br>" +
    "⚠️ Avoid adding extra sugar.",

    status:"Healthy ✅"
},

nungu:{
    image:"image/nungu.jpg",
    category:"Traditional Fruit",
    calories:"87 kcal",
    protein:"1.4 g",
    carbs:"18 g",
    fat:"0.2 g",
    fiber:"2 g",
    vitamins:"Potassium, Vitamin B",

    benefits:
    "💧 Helps hydration<br>" +
    "🌴 Refreshing traditional food<br>" +
    "🌿 Provides carbohydrates",

    risk:
    "⚠️ Large portions can add extra carbohydrates.<br>" +
    "⚠️ Choose fresh nungu from a clean source.",

    status:"Healthy ✅"
},

padaneer:{
    image:"image/padaneer.jpg",
    category:"Traditional Drink",
    calories:"50 kcal",
    protein:"0.4 g",
    carbs:"12 g",
    fat:"0.1 g",
    fiber:"0 g",
    vitamins:"Minerals, Potassium",

    benefits:
    "🌴 Traditional refreshing drink<br>" +
    "💧 Provides fluids<br>" +
    "⚡ Provides natural carbohydrates",

    risk:
    "⚠️ Contains natural sugars.<br>" +
    "⚠️ Freshness and hygiene are important.",

    status:"Healthy ✅"
},

mor:{
    image:"image/mor.jpg",
    category:"Healthy Drink",
    calories:"40 kcal",
    protein:"3.3 g",
    carbs:"4.8 g",
    fat:"0.9 g",
    fiber:"0 g",
    vitamins:"Calcium, Vitamin B12",

    benefits:
    "🥛 Provides calcium<br>" +
    "💪 Provides protein<br>" +
    "💧 Refreshing drink",

    risk:
    "⚠️ Avoid adding too much salt.<br>" +
    "⚠️ Use fresh, properly stored buttermilk.",

    status:"Healthy ✅"
},

elumichainneer:{
    image:"image/elumineer.jpg",
    category:"Healthy Drink",
    calories:"20 kcal",
    protein:"0.1 g",
    carbs:"5 g",
    fat:"0.1 g",
    fiber:"0.2 g",
    vitamins:"Vitamin C",

    benefits:
    "🍋 Provides Vitamin C<br>" +
    "💧 Refreshing drink<br>" +
    "🌿 Helps increase fluid intake",

    risk:
    "⚠️ Avoid adding excess sugar.<br>" +
    "⚠️ Very acidic drinks may bother some people.",

    status:"Healthy ✅"
},

karumbusaaru:{
    image:"image/karumbusaaru.jpg",
    category:"Natural Drink",
    calories:"74 kcal",
    protein:"0.2 g",
    carbs:"18 g",
    fat:"0.1 g",
    fiber:"0.6 g",
    vitamins:"Iron, Potassium",

    benefits:
    "🌿 Natural source of carbohydrates<br>" +
    "⚡ Provides energy<br>" +
    "🥤 Refreshing drink",

    risk:
    "⚠️ Naturally high in sugar.<br>" +
    "⚠️ Better in moderate portions.",

    status:"Healthy ✅"
},

ragikoozh:{
    image:"image/ragikoozh.jpg",
    category:"Traditional Healthy Drink",
    calories:"90 kcal",
    protein:"3 g",
    carbs:"18 g",
    fat:"1 g",
    fiber:"2 g",
    vitamins:"Calcium, Iron",

    benefits:
    "🌾 Made from ragi<br>" +
    "🦴 Provides calcium<br>" +
    "🌿 Provides fiber",

    risk:
    "⚠️ Added sugar can increase calories.<br>" +
    "⚠️ Portion size matters.",

    status:"Healthy ✅"
},

kambukoozh:{
    image:"image/kambukoozh.jpg",
    category:"Traditional Healthy Drink",
    calories:"95 kcal",
    protein:"3 g",
    carbs:"19 g",
    fat:"1 g",
    fiber:"2 g",
    vitamins:"Iron, Magnesium",

    benefits:
    "🌾 Made from pearl millet<br>" +
    "🌿 Provides fiber<br>" +
    "💪 Provides useful nutrients",

    risk:
    "⚠️ Avoid excessive added salt or sugar.<br>" +
    "⚠️ Consume a reasonable portion.",

    status:"Healthy ✅"
},

thinaikoozh:{
    image:"image/thinaikoozh.jpg",
    category:"Traditional Healthy Drink",
    calories:"100 kcal",
    protein:"3.5 g",
    carbs:"20 g",
    fat:"1.5 g",
    fiber:"2 g",
    vitamins:"Iron, Magnesium",

    benefits:
    "🌾 Made from foxtail millet<br>" +
    "🌿 Provides fiber<br>" +
    "⚡ Provides energy",

    risk:
    "⚠️ Large portions add extra calories.<br>" +
    "⚠️ Avoid excessive sugar.",

    status:"Healthy ✅"
},

nannarisarbath:{
    image:"image/nannarisarbath.jpg",
    category:"Traditional Drink",
    calories:"80 kcal",
    protein:"0 g",
    carbs:"20 g",
    fat:"0 g",
    fiber:"0 g",
    vitamins:"Minerals",

    benefits:
    "🌿 Traditional refreshing drink<br>" +
    "💧 Helps provide fluids<br>" +
    "🥤 Refreshing option",

    risk:
    "⚠️ Commercial versions may contain high added sugar.<br>" 
},
    banana: {
        name: "Banana",
        calories: "105 kcal",
        protein: "1.3 g",
        carbs: "27 g",
        fat: "0.4 g",
        fiber: "3.1 g",
        image: "image/banana.jpg"
    },

    mango: {
        name: "Mango",
        calories: "99 kcal",
        protein: "1.4 g",
        carbs: "25 g",
        fat: "0.6 g",
        fiber: "2.6 g",
        image: "image/mango.jpg"
    },

    rice: {
        name: "Cooked Rice",
        calories: "130 kcal",
        protein: "2.7 g",
        carbs: "28 g",
        fat: "0.3 g",
        fiber: "0.4 g",
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80"
    },

    idli: {
        name: "Idli",
        calories: "58 kcal",
        protein: "2 g",
        carbs: "12 g",
        fat: "0.2 g",
        fiber: "0.5 g",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },

    dosa: {
        name: "Dosa",
        calories: "168 kcal",
        protein: "3.9 g",
        carbs: "29 g",
        fat: "4.2 g",
        fiber: "1.5 g",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    },

    egg: {
        name: "Boiled Egg",
        calories: "78 kcal",
        protein: "6.3 g",
        carbs: "0.6 g",
        fat: "5.3 g",
        fiber: "0 g",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },

    chicken: {
        name: "Chicken Breast",
        calories: "165 kcal",
        protein: "31 g",
        carbs: "0 g",
        fat: "3.6 g",
        fiber: "0 g",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80"
    },

    milk: {
        name: "Milk",
        calories: "61 kcal",
        protein: "3.2 g",
        carbs: "4.8 g",
        fat: "3.3 g",
        fiber: "0 g",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
    }
};


// ===============================
// SEARCH FOOD
// ===============================

function searchFood() {

    const input = document.getElementById("food");
    const result = document.getElementById("result");

    if (!input || !result) {
        console.error("Food search elements not found.");
        return;
    }

    const searchValue = input.value.trim().toLowerCase();

    // Empty search
    if (searchValue === "") {

        result.innerHTML = `
            <div class="food-card">
                <h2>🔍 Search for a food</h2>
                <p>Please enter a food name such as <b>Apple</b>, 
                <b>Banana</b>, <b>Idli</b> or <b>Dosa</b>.</p>
            </div>
        `;

        return;
    }


    // Find food
    const food = findFood(searchValue);


    // Food not found
    if (!food) {

        result.innerHTML = `
            <div class="food-card">

                <h2>😕 Food Not Found</h2>

                <p>
                    We couldn't find nutrition information for
                    <b>${escapeHTML(input.value)}</b>.
                </p>

                <p>
                    Try searching for:
                    Apple, Banana, Mango, Rice, Idli, Dosa,
                    Egg, Chicken or Milk.
                </p>

            </div>
        `;

        return;
    }


    // Display result
    result.innerHTML = `

        <div class="food-card">

            <img
                src="${food.image}"
                alt="${food.name}"
            >

            <h2>
                ${food.name}
            </h2>

            <p>
                🔥 <b>Calories:</b> ${food.calories}
            </p>

            <p>
                💪 <b>Protein:</b> ${food.protein}
            </p>

            <p>
                🍚 <b>Carbohydrates:</b> ${food.carbs}
            </p>

            <p>
                🥑 <b>Fat:</b> ${food.fat}
            </p>

            <p>
                🌿 <b>Fiber:</b> ${food.fiber}
            </p>

            <h3>
                ✓ Nutrition information displayed successfully
            </h3>

        </div>

    `;

}


// ===============================
// FIND FOOD
// ===============================

function findFood(searchValue) {

    // Exact match
    if (foodData[searchValue]) {
        return foodData[searchValue];
    }


    // Partial match
    const foodKey = Object.keys(foodData).find(function(key) {

        return (
            key.includes(searchValue) ||
            foodData[key].name.toLowerCase().includes(searchValue)
        );

    });


    if (foodKey) {
        return foodData[foodKey];
    }


    return null;
}


// ===============================
// SAFE HTML TEXT
// ===============================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ===============================
// ENTER KEY SEARCH
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    const foodInput = document.getElementById("food");

    if (!foodInput) {
        return;
    }

    foodInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchFood();

        }

    });

});