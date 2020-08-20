// Exercises 1
let numChildren = Number(prompt("enter num of children:"))
const isCareful = false

if(!isCareful){
    numChildren = numChildren + 1
} else{

}

console.log(numChildren)


// Exercises 2
const silverwareCount = 5

if((silverwareCount % 2) == 0){
    console.log("great")
}else{
    console.log("something missing")
}

// Exercises 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance == "good") {
    salary += goodBonus
} else if(performance == "stellar") {
  salary += stellarBonus
}

// Exercises 4
const isVIP = false
let cash = 500

if(isVIP || cash > 300){
  console.log("Welcome")
} else {
  console.log("Bye")
}

// Exercises 5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++

if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Exercises 6
const gender = "female"
let profession = "business"

if(gender == null){
    console.log(profession + "person")
}else if(gender == "male"){
    console.log(profession + "man")
}else if(gender == "female"){
    console.log(profession + "woman")
}

// Exercises 7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if(boughtTesla && isUSCitizen){
    numOfYear = Number(prompt("enter when you bought your tesla?:"))
    if((currentYear - numOfYear) >= 4){
        console.log("Do you want to upgrade your tesla?")
    }else{
        console.log("Do you happy with your tesla?")
    }
}else if (boughtTesla){
    console.log("Would like to move to the US?")
}else{
    console.log("Do you interest in buying tesla?")
}