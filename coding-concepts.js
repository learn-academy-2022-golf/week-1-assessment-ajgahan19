// // ASSESSMENT 1: Coding Conceptual Questions

// // Examine the following examples.

// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: When you console log this you will get the answer ["tangerine", "magenta", "lilac", "daffodil","indigo"] 
// b) Verify and explain: When you console log this you will get the answer 


// // --------------------1) What will this log?

// const cohort = "LEARN 2022"
// console.log(cohort.length)  

// a) Your answer: Initalitally, at first glance I thought This will log, "Learn 2022"(no parenthsis). However, after doing a little of research on my reasoning behind my answer. I found that I was wrong! After researching about built in mwthods, i've concluded that the use of, .lenth can count the amount of spaces in a string of values within an array then adds plus one too what we call the index count. For this use case we only have one variable with a single value not in an array but identifie as a single value that is identified as a string. When we invoked the variable, chort, and attached the builtin .length. The computer will count the indexed spaces within the value starting at 0-L to the last 2, in 2022 then add another number(space) into the index. Thus, Giving a value of 10 for our index.
// // b) Verify and explain: chort has been declaried as, "Learn 2022".
// so when we console log this into the terminal, parathesis to invoke out.

// // --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4]) 

// // a) Your answer: o
// // b) Verify and explain: The value that we are logging is called 
// When you console log and pass the variable greeting followed by the number four in brackets. The terminal will return o in hello. The reason why it does this is because we are using indexing as an accessor to pull a spacific value to a string. The Characters in a string are indexed from left to right starting with zero and counts up in assending order in number we can use indexing to pull spacific data from the string.



// // --------------------3) What will this log?

                    // const languages = ["JavaScript", "Ruby", "Python", "C++"]
                    // const index = 1
                    // console.log(languages[index])

                    // // a) Your answer: When you log this into the terminal you should get, Ruby. 
                    // // b) Verify and explain: When the computer gets told to go through an array it will use the numbers as an accessor to pull a spacific value of data from it. The Characters in a string are indexed from left to right starting with zero and counts up in assending order in number we can use indexing to pull spacific data. In this problem we console logged value and called on the first index within the array languages.


// // --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase(0))

// // a) Your answer: When logging console.log(weekendDays.toUpperCase()) into the terminal I recieved a TypeError: weekendDays.toUpperCase is not a function. or looks like we didnt tell the computer which value in our array we wanted to upper case. 
// b) Verify and explain: The reason why its not a function is because we haven't created a function where we can tell the system to capitilize out values. We can fix this by creating functions, or vairables for each index because the values in an array can be mutated and changed. 
// // --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// // a) Your answer: when you console.log(typeof dataTypes.length) the terminal will return, number. 

// SIDE-NOTE:
// (This was a funny one! Every value in the array is one of the 6 data types. I tried to keep in mind they they are just words. The computer is dumb and cannot recognize words unless we define them. I tried to create a few problem of my own to better understand its use cases as well.) 

// // b) Verify and explain: First lets identify the different use cases of type of and .length up above in the problem this is variable, LearnStudents that has an Array. the Array has a colletions of values, ["Debra", "Jonas", "Joel"] that is indexed by numbers starting with the number Zero and goes up in asending order in accordance with every value. .length, is also an informational command that returns the NUMBER of elements in the array. Moving onto the "typeof" operator. The typeof operator is used to differentiate primiative data types. Up above above we have an array with strings in it. type of will return, one; of the primative data types. When call on,learnstudents variable the computer identifies that it needs to use the typeof which idenfies the string and the data type. Then the dot length will count the spaces and then add another index to the problem but it will not be logged.   

// -----------------------------------------------------------------------------------


