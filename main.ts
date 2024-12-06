game.splash("Let's calculate the pizza cost")
let HST = 0.13
let LABOUR = 0.75
let MATERIALS = 0.5
let RENT = 1
let diameter_of_the_pizza = game.askForNumber("What is the diameter?")
let subtotal = LABOUR + (RENT + MATERIALS * diameter_of_the_pizza)
let tax = HST * subtotal
let total = subtotal + tax
game.splash("The total cost is $", total)
