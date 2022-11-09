// ASSESSMENT 1: Coding Practical Questions

   


// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.
//find out what variable I will be declaring within the function so that the function can call on it to be executed.
// Describe your process:



// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// const fruit3 = ()=> {
//  return "banana"  
// }
// console.log(fruit3) 
// Expected outcome: "banana"

// const fruity = (string1, string2) => {
// if (string1.lenth> string2.length){
//     return string1
// } else if  (string1.length < string2.length) {
//     return string2
// }else {
//     return "Ooops, something went wrong"
// }
// }

// console.log(fruity(fruit1,fruit2))
// console.log(fruity(fruit3,fruit4))

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"









// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.


// const Temperature = () => {
//     if (temp1 < 212){
//         return `${temp1} is below boiling point`
//     // } else if (temp2 > 212) {
//     //         return `${temp2} is above boiling point`
//     // } else if (temp3 === 212) {
//     //     return `${temp3} is at boiling point`
//     // } else {
//     //     return "Well thats not right"
//     // }
//     // }
// console.log(Temperature(temp1))
// console.log(Temperature(temp2))
// console.log(Temperature(temp3))


// Describe your process:
// For the problem above, we need to create a function.
// I will call it, “is it hot” I’ll Start by creating a function by using syntax characters. so that the computer knows I am creating a function. The Function will take on a single parameter called num1.
// I will utilize a conditional statement. (Define)It will cover three cases.
// Within the functions code block. I will create three conditional statements and a catch all. Through out the code block I will be using relational operators (define) for each of the 3
// I will creat a conditional statement.
// Once you log this solution into the console log you should get.

// const temp1 = 42
// Expected output: "42 is below boiling point"

// const temp2 = 350
// Expected output: "350 is above boiling point"

// const temp3 = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// For is problem we do not need a function. However, it is possible to create one that would work. we cand do that by using the Built-in method .concat, This method is used to merge two arrays. It also does not change the existing arrays when combinding. 
// NOTE:
// To be honest, I have not used the concat method I have have read about a thousand times tho. So im going to giving it a try! 
//I need to do more coding on my own.  
// I'm going turn the two given arrays into variables then I will combine them with the concat method. 

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
// // Expected output: 9

// const concatRuns = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)).length
// //console.log(concatRuns) // output: 9


// Describe your process:
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

// we need to start off by creating a new variable to equal to the original variable so that we can manipulate the array.
// Now that we have the value of array to play with, we can use some array methods to alter the array. 
// Next we need to ffind an array method that will Reverse the values in an array. we can do that by using, .reverse() method. After that I need to find Find an method that will convert thee string "Golf 2022" into an array.
// In this use case I will use the The .split(""). This will split all the characters in the string into elements of an array.
// I will Start by creating a new a array. I will name it bestCohortof2022ever.
// Now that we have an array to work with, we can use .reverse() method to reverse the elements in our array.
// The elements in the array are now reversed, however they are all seperated by single quotes since they are elements of an array.
// Lastly, we need to Console log the variable to check the result.

//Find a method that will convert the array back into a string

// const bestCohortof2022ever = "Golf 2022"
// console.log(bestCohortof2022ever.split(""))

// Console log the variable to check the result.

// const currentCohort = "Golf 2022"
// // Expected output: "2202 floG"


// const bestCohortof2022ever = currentCohort.split('').reverse().join("")
// const currentCohort = "Golf 2022"
// Expected output: "2202 floG"


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
    
    // 1. Find a method that will go through the array and grab the last of that element we pass in. 
    
    // 2. We will Use the .lastIndexOf() method on the array and pass the arguments to Return the last indexs value. This is useful 
    // when there are repeated values in an array.
    
    // 3. We will do all this witin the console.log when calling on out array to pull the desired index.
    
        // The ouput should show us the last index or location of the number we pass in the array.
    
    
        // const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
    
        // console.log(myNumbers.lastIndexOf(10))  
        // output: 8
        
        // console.log(myNumbers.lastIndexOf(42))
        // //output: 7
//Rant: 
// Aftergoing through this assesment I've realized I keep trying to remember everything and thats not going to happen. I'm familiar with the process and a good portion of the vocabulary. However, I still cannot recall the proper syntax to ultalize I have to look it up.




// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.
    
    // Describe your process:
    
    //I need Find an array method that sorts. In this case, the method I will use is .sort()
    // /When we utalize /Since .sort() sorts numbers from smallest to largest, so we must find a method that reverses the elementss in an array to make the numbers sort   from largest to smallest. In this case the method we can use is .reverse()
    //We can do all this by staying within the console.log.
    // Example:  console.log(myArrayList.sort().reverse())
    //This code tells the interpreter to first sort the elements in the array and then reverse the order of that sorted list.
    // Question: Can we can chain these two methods togeather. I have no idea how that looks. However, I 
    


    // const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
    // // Expected output: [82, 80, 79, 77, 76, 73, 72]
    
    // const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
    // // Expected output: [68, 67, 66, 66, 62, 59, 59]
    
    //console.log(sanDiegoSummerTemperatures.sort().reverse())  // [82, 80, 79, 77, 76, 73, 72]
    //console.log(sanDiegoWinterTemperatures.sort().reverse())  // [68, 67, 66, 66, 62, 59, 59]
    
    
    // -----------------------------------------------------------------------------------
    
    
    
    
    
    
    
  
    