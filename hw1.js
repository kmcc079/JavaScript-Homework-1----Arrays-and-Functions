//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    for(let i of dog_names){
        if(dog_string.match(i)){
            console.log(`Matched ${i} \n`)
        } else {
            console.log('No Matches')
        }
    }
    return 'complete'
}
console.log(findWords())

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// GIVEN ARRAY:
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, 'even index')
    }
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//============Code Wars============//

// Exercise #1 //
/*Create a function that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
    // if(number % 2 == 0){
    //   return "Even"
    // } else {
    //   return "Odd"
    // }
    return (number % 2 == 0) ? "Even" : "Odd"
 }

console.log(evenOrOdd(717))


// Exercise #2 //
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
function makeNegative(num) {
    // if (num > 0) {
    //     return num * -1
    // } else {
    //     return num
    // }
    return (num > 0) ? -num : num;
}

console.log(makeNegative(-4658571))


// Exercise #3 //
/* Complete the square sum function so that it sqares each number 
passed into it and then sums the results together
ex: for [1,2,2] it should return 9 ) 1**2 + 2**2 + 2**2 = 9 */
function squareSum(numbers){
    // let sum = 0
    // for (let i = 0; i < numbers.length; i++){
    //     sum += numbers[i]**2
    // };
    // return sum
    return numbers.reduce( (accumulator, current_num) => accumulator + current_num**2, 0)
}

console.log(squareSum([1,2,2]))


// Exercise # 4
/* Remove the spaces from the string, then return the resultant string.*/
function noSpace(x){
    return x.split(" ").join("")
}

console.log(noSpace("Gettin' Jiggy Wit It"))