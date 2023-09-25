const array = [
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 3, name: "Hafsa", city: "Karachi" },
    { id: 4, name: "Rehan", city: "Lahore" },
    { id: 5, name: "Saqib", city: "Karachi" },
    { id: 6, name: "Farhan", city: "Islamabad" }
];

console.log(array);

// ------------ Using Reduce ------------------
console.log("------------ Using Reduce ------------------")

console.log(array.reduce((acc, user) => {
    if (user.city in acc){
        acc[user.city].push(user)
    }
    else {
        acc[user.city] = [user]
    }
    return acc
},{}))

// ------------ Using Map ------------------
// if we use map, we have to first declare an object to store the result
console.log("------------ Using Map ------------------")

let mapObject = {}
array.map(user => {
     if (user.city in mapObject){
        mapObject[user.city].push(user)
    }
    else {
        mapObject[user.city] = [user]
    }
})

console.log(mapObject)

// ------------ Using For in ------------------
console.log("------------ Using For in ------------------")

let forInObject = {}

for(user in array) {
    if (array[user].city in forInObject) {
        forInObject[array[user].city].push(array[user])
    }
    else {
        forInObject[array[user].city] = [array[user]]
    }
}

console.log(forInObject)