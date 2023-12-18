// adjust sizing of show recipe text, it should say:
// 'You should make {NAME OF RECIPE}!'
// figure out how to pass in argument in event listener
// ***toggle cook pot icon

var sides = ['Hummus', 'Tabbouleh', 'Baba Ganoush', 'Tzatziki', 'Dolma', 'Greek Salad', 'Falafel', 'Fattoush', 'Muhammara', 'Spanakopita']
var mainDishes = ['Chicken Shawarma', 'Lamb Kofta', 'Paella', 'Gyro Platter', 'Moussaka', 'Souvlaki', 'Caponata']
var desserts = ['Baklava', 'Tiramisu', 'Creme brulee', 'Cheesecake', 'Chocolate Cake']
var entireMeal = []
var currentDish = ''

var sideButton = document.querySelector('#side-button')
var showRecipe = document.querySelector('#show-recipe-box')
var recipeSuggestion = document.querySelector('#recipe-suggestion')
var cookPot = document.querySelector('svg')
var letsCookButton = document.querySelector('#lets-cook-button')
letsCookButton.addEventListener('click', showRecipes)


function showRecipes() {
    var randomRecipe = chooseRandomIndex(sides)
    currentDish = (sides[randomRecipe])
    showRecipe.innerText = 'You should make: '
    recipeSuggestion.innerText = `${currentDish}!`
    cookPot.innerHTML.toggle('hidden')
}

function chooseRandomIndex(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    return randomIndex
}