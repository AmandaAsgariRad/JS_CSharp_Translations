// Put your code here

console.log("Do you believe in magic?")
console.log("-------------------")


//create the GetAllSpells function that defines an array of Spell
//objects which require properties
//return the array
const GetAllSpells = () => {
    const allSpells = [
        {
            Name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            Name: "Make yourself emporor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }

    ]

    return allSpells
}

//save the function just created to a variable

const allSpells = GetAllSpells()

//now create functions for the good and evil books
//these functions will take in the allSpells array as a parameter
//it will define the book object
//the book objects title and spell proptery will be defined
//the spells property will be an new array of good spells
//to populate the new array, the function must filter thru the
//allSpells array to find the spells that are not evil
//return the new array

const MakeGoodSpellBook = (allSpells) => {
    const goodBook = {
        title: "Good Book",
        spells: allSpells.filter(spell => !spell.isEvil)
    };
    return goodBook;
};

const MakeEvilSpellBook = (allSpells) => {
    const evilBook = {
        title: "Evil Book",
        spells: allSpells.filter(spell => spell.isEvil)
    };
    return evilBook;
};

const goodBook = MakeGoodSpellBook(allSpells)
const evilBook = MakeEvilSpellBook(allSpells)

//create a function to take in the book (object) parameter and return nothing
//and console log the books title
//loop thru the spells array which is a property
//within the book object
//console.log each spells name

const DisplaySpellBook = (book) => {
    console.log(book.title)
    for (let spell of book.spells) {
        console.log(spell.Name)
    }
}

DisplaySpellBook(goodBook)
console.log()
DisplaySpellBook(evilBook)




