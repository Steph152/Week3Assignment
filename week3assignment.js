
console.log('Week Three Assignment')
//Coding Steps:

/*1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
    a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
        (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed).
        Print the result to the console.

    b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

    c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console. */
let ages = [3, 9, 23, 64, 2, 8, 28, 93];    // instruction 1. create array ages
let lastElement = ages[ages.length-1];      // instruction a. ages.lenght-1 returns the value of the last element
let firstElement = ages[0];                 // we know that ages[0] is the first value in the array because arrays are 0 basesd indexes
console.log(lastElement - firstElement);    // subtracts the first element from the last element and prints the equated value, 90, to the console

ages.push(29);                              // instruction b. pushes a new element with the value of 29 to the last position in the array ages  
lastElement = ages[ages.length-1];          // redefines the variable lastElement after pushing a new element into the array
console.log(lastElement - firstElement);    // prints the new equated value, 26 to the console

let sum = 0;                                // instruction c. establishes the variable sum with an initial value of 0
for (i = 0; i < ages.length; i++){          // created a for loop, the initialization of i=0, the condition that i is less than the array length, and the iteration that i will increase each time the loop is repeated
   sum += ages[i];                          // each time the loop iterates, the element position [i] increases, and the value is added to the existing value of sum
}
console.log(sum / (ages.length));           // takes the value of sum after the for loop is complete, divides it by the number of elements in the array, and logs to the console

sum = 0;
ages.forEach(age => (sum += age));          // another way write problem c, using an arrow function
console.log(sum/ages.length);

/*2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console. */
let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];   // instruction2. create an array with the given values
let sumNames= 0;                                                    // a. establises the sumNames variable as 0
function totalArray(){                                              // this function will add the length of each string of the array
    for (i=0; i < namesArray.length; i++){                          // a for loop to iterate through the fuction
    sumNames += namesArray[i].length;                               // redefines the value for sumNames with the total number of letters in the array
    }
}
totalArray();                                                       // calls the function
console.log(sumNames / namesArray.length);                          // prints the total number of letters, sumNames, divides by the amount of elemnts in the array

let allNames = ''                                                   // declares the varialbe allNames as an empty string
function listNames(){                                               // declares a function 
    for(i=0; i < namesArray.length; i++){                           // a for loop that will iterate through the function
      allNames += namesArray[i] + ' '                               // each time the loop iterates through the function, it adds the next name in the array to the variable allNames
    }
}
listNames();                                                        // calls the function
console.log(allNames);                                              // logs the variable allNames to the console after the loop has iterated 

//3.	How do you access the last element of any array?
//In order to find the last element of any array, we use the array.length method. 
//array.lenght will show the number of elements in an array, and minus one will be the last element's position because arrays use zero based indexing. 
//Here is an example:
let dogsArray = ['labrador', 'poodle', 'bulldog', 'german shepard', 'husky'];
let lastDogsElement = dogsArray[dogsArray.length-1];  // uses the .length method to find the last element, cannot redeclare as lastElement
console.log(lastDogsElement);  //prints the last element to the console


//4.	How do you access the first element of any array?
//You can access any element in the array based on its position. 
//Arrays are zero based indexes, meaning that the element in the first position of the array is at position zero. 
console.log(dogsArray[0]);   //using the same array as above, prints the element at position 0, the first element, to the console

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
let nameLengths = []                                // declared new array, nameLengths
function createNameLenghtsArray(){                  // ceclared function to pass new values into nameLengths
    for(i=0; i < namesArray.length; i++){           // a for loop to iterate all the values of namesArray through the function
    nameLengths[i] = namesArray[i].length;          // takes the length of each string from namesArray, and adds it to the new array nameLengths
    }
} 
createNameLenghtsArray();                           // calls the createNameLengths function
console.log(nameLengths);                           // prints the new array nameLengths to the console

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sumLengths = 0                                  // declared new variable sumLengths as 0
function sumOfNameLengths(){                        // created funtion to pass the values of nameLengths[] through                      
    for (i=0; i < nameLengths.length; i++){         // a for loop to iterate all of the values of nameLenghts[]                 
    sumLengths += nameLengths[i];                   // as the values are iterated, takes each value of nameLengths[] and adds it to the value of sumLenghts  
    }
}
sumOfNameLengths();                                 // dont forget to call your function!
console.log(sumLengths);                            // logs the value of sumLengths after the values of nameLengths[] have passed through the function

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatWord(word, n){     //created a function with the parameters of word and n
    console.log(word.repeat(n));  //tells the function to repeat the word n number of times
}
concatWord('study', 3);   //prints the word study three times to the console

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName) {   // created a function with the parameters of firstName and lastName
    console.log(`${firstName} ${lastName}`);     //prints the first and last name to the log using template literal
}
createFullName('Dolly','Parton');  //this calls the function, and passes the values 'Dolly' and 'Parton' through the function

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numberArray = [1, 2, 3, 4, 99];                      // declared numberArray
let sumNumbers = 0;                                  // declared the variable sumNumbers with a value of 0
function greaterThanHundred(){                       // created a function to pass the values of numberArray[]
    for (i=0; i < numberArray.length; i++){          // a for loop to iterate all of the values of numberArray[]                 
        sumNumbers += numberArray[i];                // adds all of the values of numberArray to the variable sumNumbers and they are iterated through the function
        if (sumNumbers > 100){                       // if statement to return the value true if sumNumbers is greater than 100
            return true;
        }
    }
}
console.log (greaterThanHundred(numberArray));       // logs the return value true to the console if the if statement is met, or undefined if it is not

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(array){                             // created a function 
    let sum = 0
    array.forEach(number => (sum += number));       
    return sum/array.length;                        // the function returns the result of the sum divided by the length of the array
} 
console.log(average(numberArray));                  // calls the function using the array from the previous exercise and logs to console

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function arrayCompare(array1, array2){                          // creates a function to compare two arrays
    return average(array1) > average(array2)                    // returns true if the average of array 1 is larger than the average of array 2
}
console.log(arrayCompare([6, 7, 8, 9], [1, 2, 3, 4, 5, 99]));       // logs to console the return from the function, includes the arguments for the function


// below is my first try at the above problem. it seemed super bulky and too hard to follow, I was able to clean it up to only 4 lines!

/*let anotherNumberArray = [5, 6, 7, 8, 99]                   // created two different arrays containing numbers
let notAnotherNumberArray = [9, 10]
let sumFirstArray = 0                                       // declared to variable to hold the values of sums
let sumSecondArray = 0
  function firstArrayLarger(){                              // created a function to find if the average of the first array is larger than the second
    for (i=0; i < anotherNumberArray.length; i++){          // a for loop that finds the sum of the numbers in the first array, anotherNumberArray[]
        sumFirstArray += anotherNumberArray[i];
    }
    for (i=0; i < notAnotherNumberArray.length; i++){      // a for loop that finds the sum of the numbers in the second array, notAnotherNumberArray[]
    sumSecondArray += notAnotherNumberArray[i];
    }
    if((sumFirstArray /anotherNumberArray.length) > (sumSecondArray / notAnotherNumberArray.length)){   // an if statement that will retrun true if the average in the first array is true, and will be undefined if false
        return true
    }
}
console.log(firstArrayLarger(anotherNumberArray, notAnotherNumberArray))       // logs the function to the console*/


//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){                // created function
    if (isHotOutside && moneyInPocket > 10.50){                    // used if statement to declare conditions for parameters
        return true                                                // returns boolean true if conditions listed in instructions are met
    }else{
        return "thirsty"                                           // just messing around, added extra step if conditions are not met
    }
}
console.log(willBuyDrink(true, 9))                                // runs the arguments through the function, logs the returned value to the console


//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 
function circleArea(r){                    // I created a function that will calculate the area of a circle, with the input of a radius, r     
    return Math.PI * Math.pow(r, 2);       // Math.pow uses two arguments, the first is the number and the second is the exponent
}
console.log(circleArea(1))                  // logs the area to the console


function clap(happy, knowIt){                       //   this function will evaluate whether or not hands should be clapped, based on the values of  
    if (happy && knowIt){                            //    the variables happy and know it. I created this function because I am happy and I know it and
        return 'clap your hands'                      //   I really wanna show it :)
    }else{
        return 'error'
    }
}
console.log(clap(true, true))