const companies = [{
        name: "Company One",
        category: "IT",
        start: 1999,
        end: 2006
    },
    {
        name: "Company Two",
        category: "Finance",
        start: 1900,
        end: 2020
    }, {
        name: "Company Three",
        category: "Swimming",
        start: 2000,
        end: 2019
    }, {
        name: "Company Four",
        category: "IT",
        start: 2019,
        end: 2020
    },
    {
        name: "Company Five",
        category: "Finance",
        start: 2000,
        end: 2016
    }, {
        name: "Company Six",
        category: "Space",
        start: 1800,
        end: 2020
    }
];
const ages = [25, 34, 12, 46, 78, 33, 22, 19, 18, 16, 89, 55, 60];


// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
// 

// companies.forEach(function(company) {
//     console.log(company);
// });


//Filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

const canDrink = ages.filter(function(age) {
    if (age >= 21) {
        return true;
    }
});
console.log(canDrink);