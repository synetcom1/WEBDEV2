// function sum(a, b) {
//     return a + b;
// }

// const sum2 = (a, b) => a + b;
// const multiple2 = (x, y) => x * y;

// function isPositive(number) {
//     return number >= 0;
// }
// let positive2 = number => numnber >= 0;

// function randomNumber() {
//     return Math.random;
// }
// const random2 = () => Math.random;


function doLoop(numbers) {
    let i;
    for (i = 0; i < numbers.length; i++)
        console.log(numbers[i])
}
const doLoop2 = numbers => {
    let i;
    for (i = 0; i < numbers.length; i++)
        console.log(numbers[i])
}
document.addEventListener('click', function() {
    console.log('click');
});
document.addEventListener('click', () => console.log('click'));