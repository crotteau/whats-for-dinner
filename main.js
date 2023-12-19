// adjust sizing of show recipe text, it should say:
// 'You should make {NAME OF RECIPE}!'
// figure out how to pass in argument in event listener
// ***toggle cook pot icon

var sides = ['Hummus', 'Tabbouleh', 'Baba Ganoush', 'Tzatziki', 'Dolma', 'Greek Salad', 'Falafel', 'Fattoush', 'Muhammara', 'Spanakopita']
var mainDishes = ['Chicken Shawarma', 'Lamb Kofta', 'Paella', 'Gyro Platter', 'Moussaka', 'Souvlaki', 'Caponata']
var desserts = ['Baklava', 'Tiramisu', 'Creme brulee', 'Cheesecake', 'Chocolate Cake']
var entireMeal = []
var currentDish = ''
var mealsArray;
var buttonHasFocus;

var sidesButton = document.querySelector('#side-button')
var mainDishesButton = document.querySelector('#main-dish-button')
var dessertsButton = document.querySelector('#dessert-button')
var entireMealButton = document.querySelector('#entire-meal-button')
var letsCookButton = document.querySelector('#lets-cook-button')
var clearButton = document.querySelector('#clear-button')

var showRecipe = document.querySelector('#show-recipe-box')
var recipeSuggestion = document.querySelector('#recipe-suggestion')
var cookPot = document.querySelector('svg')

sidesButton.addEventListener('click', chooseArray)
mainDishesButton.addEventListener('click', chooseArray)
dessertsButton.addEventListener('click', chooseArray)
entireMealButton.addEventListener('click', chooseArray)

letsCookButton.addEventListener('click', showRecipes)
// clearButton = document.querySelector('click', resetSuggestions)

function chooseRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

function showRecipes() {
    cookPot.classList.add('hidden')
    clearButton.classList.remove('hidden')

    if (mealsArray !== 'Choose Entire Meal') {
    var randomRecipe = chooseRandomIndex(mealsArray)
        currentDish = mealsArray[randomRecipe]
    
    showRecipe.innerText = 'You should make: '
    recipeSuggestion.innerText = `${currentDish}!`
    } else {
        var randomSide = chooseRandomIndex(sides)
        var sideDish = sides[randomSide]
        var randomMain = chooseRandomIndex(mainDishes)
        var mainDish = mainDishes[randomMain]
        var randomDessert = chooseRandomIndex(desserts)
        var dessertDish = desserts[randomDessert]

        showRecipe.innerText = 'You should make: '
        recipeSuggestion.innerText = `${sideDish}, ${mainDish}, and ${dessertDish}!`
    }
}

function chooseArray() {
    buttonHasFocus = document.activeElement
    if (buttonHasFocus.id === 'side-button') {
        mealsArray = sides
    } else if (buttonHasFocus.id === 'main-dish-button') {
        mealsArray = mainDishes
    } else if (buttonHasFocus.id === 'dessert-button') {
        mealsArray = desserts
    } else { 
        mealsArray = 'Choose Entire Meal'
    }
    return mealsArray
}

