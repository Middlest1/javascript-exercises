



const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Billy",
        yearOfBirth: 1912,
        yearOfDeath: 1999,
    },
    {
        name: "Sally",
        yearOfBirth: 1912,
        yearOfDeath: 1922,
    },
]


const findTheOldest = function (array) {
    return array.reduce(function (longestLived, person) {
        const longestLivedAge = longestLived.yearOfDeath - longestLived.yearOfBirth;
        console.log(longestLivedAge)
        const yearsLived = person.yearOfDeath - person.yearOfBirth;
        console.log(yearsLived)
        return yearsLived > longestLivedAge ? person : longestLived;
    })

};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
