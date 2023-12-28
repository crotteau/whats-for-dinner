var sides = ['Hummus', 'Tabbouleh', 'Baba Ganoush', 'Tzatziki', 'Dolma', 'Greek Salad', 'Falafel', 'Fattoush', 'Muhammara', 'Spanakopita']
var mainDishes = ['Chicken Shawarma', 'Lamb Kofta', 'Paella', 'Gyro Platter', 'Moussaka', 'Souvlaki', 'Caponata', 'Trout']
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
var addRecipeButton = document.querySelector('#add-recipe-button')
var addNewButton = document.querySelector('#add-new-button')

var showRecipe = document.querySelector('#show-recipe-box')
var recipeSuggestion = document.querySelector('#recipe-suggestion')
var cookPot = document.querySelector('svg')
var addRecipeForm = document.querySelector('#add-recipe-form')
var recipeType = document.querySelector('#recipe-type')
var recipeName = document.querySelector('#recipe-name')

sidesButton.addEventListener('click', chooseArray)
mainDishesButton.addEventListener('click', chooseArray)
dessertsButton.addEventListener('click', chooseArray)
entireMealButton.addEventListener('click', chooseArray)
letsCookButton.addEventListener('click', showRecipes)
addRecipeButton.addEventListener('click', toggleRecipeForm)
addNewButton.addEventListener('click', addNewRecipe)

function chooseRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}

function adjustRecipeView() {
    cookPot.classList.add('hidden')
    clearButton.classList.remove('hidden')
    showRecipe.classList.remove('hidden')
    recipeSuggestion.classList.remove('hidden')
    clearButton.addEventListener('click', resetSuggestions)   
}

function showRecipes() {
    adjustRecipeView()
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
        recipeSuggestion.innerText = `${mainDish} with a side of ${sideDish} and ${dessertDish} for dessert!`
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
    } else if (buttonHasFocus.id === 'entire-meal-button') { 
        mealsArray = 'Choose Entire Meal'
    }
    return mealsArray
}

function resetSuggestions() {
    cookPot.classList.remove('hidden')
    clearButton.classList.add('hidden')
    showRecipe.classList.add('hidden')
    recipeSuggestion.classList.add('hidden')
}

function toggleRecipeForm() {
    addRecipeForm.classList.toggle('hidden')
}

function addNewRecipe() {
    var userRecipe = recipeName.value
    if (recipeType.value === 'main dish' && userRecipe !== 'undefined') {
        mainDishes.push(userRecipe)
    } else if (recipeType.value === 'side' && userRecipe !== 'undefined') {
        sides.push(userRecipe)
    } else if (recipeType.value === 'dessert' && userRecipe !== 'undefined') {
        desserts.push(userRecipe)
    } else {
        userRecipe = 'Invalid Recipe Type'
        }

    currentDish = userRecipe || 'Please add a recipe name' 
    showRecipe.innerText = 'You should make: '
    recipeSuggestion.innerText = `${currentDish}!`
    adjustRecipeView();
}
