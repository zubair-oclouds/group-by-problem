const array = [
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 3, name: "Hafsa", city: "Karachi" },
    { id: 4, name: "Rehan", city: "Lahore" },
    { id: 5, name: "Saqib", city: "Karachi" },
    { id: 6, name: "Farhan", city: "Islamabad" }
];

function GroupByUsingReduce(array, attribute) {
    let result = array.reduce((acc, user) => {
        acc[user[attribute]] = (acc[user[attribute]] || []).concat(user);
        return acc
    }, {})
    return result
}

const GroupByUsingMap = (array, attribute) => {
    let result = {}
    array.map(user => {
        if (user[attribute] in result) {
            result[user[attribute]].push(user)
        }
        else {
            result[user[attribute]] = [user]
        }
    })

    return result
}

const GroupByUsingForIn = function (attribute) {
    let result = {}

    for (user in array) {
        if (array[user][attribute] in result) {
            result[array[user][attribute]].push(array[user])
        }
        else {
            result[array[user][attribute]] = [array[user]]
        }
    }

    return result
}

// ------------ Using Reduce ------------------
console.log("------------ Using Reduce ------------------")

console.log(GroupByUsingReduce(array, 'name'));

// ------------ Using Map ------------------
console.log("------------ Using Map ------------------")

console.log(GroupByUsingMap(array, 'city'));

// ------------ Using For in ------------------
console.log("------------ Using For in ------------------")

console.log(GroupByUsingForIn('id'));