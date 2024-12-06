game.splash("Let's calculate the pizza cost")
HST = 0.13
LABOUR = 0.75
MATERIALS = 0.5
RENT = 1
diameter_of_the_pizza = game.ask_for_number("What is the diameter?")
subtotal = LABOUR + (RENT + MATERIALS * diameter_of_the_pizza)
tax = HST * subtotal
total = subtotal + tax
game.splash("The total cost is $", total)