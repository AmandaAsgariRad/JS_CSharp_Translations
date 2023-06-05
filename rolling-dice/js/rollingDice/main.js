// Put your code here
console.log("Let's roll some dice, baby!")
console.log("----------------")

const Roll = () => {
    return Math.floor(Math.random() * 6) + 1
}
for (let i = 0; i < 10; i++) {
    let die1 = Roll()
    let die2 = Roll()

    let message = (`${die1} + ${die2} == ${die1 + die2}`)

    if (die1 == die2) {
        message += " Doubles!"
    }

    console.log(message)
}

