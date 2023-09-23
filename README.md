# Group By City

## Description

This code snippet demonstrates how to group an array of objects by a specified key, in this case, the "city" property. The goal is to organize the data into groups based on the values of the "city" property.

## Code

```javascript
const array = [
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 1, name: "Bilal", city: "Lahore" },
    { id: 3, name: "Hafsa", city: "Karachi" },
    { id: 4, name: "Rehan", city: "Lahore" },
    { id: 5, name: "Saqib", city: "Karachi" },
    { id: 6, name: "Farhan", city: "Islamabad" }
];

// Define the function for grouping by the "city" property
function groupByKey(array, key) {
    // Implementation goes here (without the solution)
}

// Use the function to group the array by the "city" property
const groupedData = groupByKey(array, "city");

// Output the grouped data
console.log(groupedData);


//Output should be like this

{
    "Karachi": [
        {
            id: 3,
            name: "Hafsa",
            city: "Karachi"
        },
        {
            id: 5,
            name: "Saqib",
            city: "Karachi"
        }
    ],
    "Lahore": [
        {
            id: 1,
            name: "Bilal",
            city: "Lahore"
        },
        {
            id: 1,
            name: "Bilal",
            city: "Lahore"
        },
        {
            id: 4,
            name: "Rehan",
            city: "Lahore"
        }
    ],
    "Islamabad": [
        {
            id: 6,
            name: "Farhan",
            city: "Islamabad"
        }
    ]
}

```
