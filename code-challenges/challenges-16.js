'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {

    let word = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
        word += string[i]

    }
    string=word;
    return string;
}

// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    
    let newArr=[];
    for( let i =0 ;i<arr.length;i++){
    
    if (arr[i].includes("^_^"))
    
     newArr.push(arr[i]);
    }
    arr=newArr;
    return newArr;
    
    }




// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {

    let word = "";

    for( let i =0 ;i<str.length;i++){
    
    if (i%2==0){
      
        word += str[i]
    }
    
    }
    str=word;
    return str;
    }




// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let newArr=[];

    for( let i =0 ;i<arr.length;i++){

    for( let t =0 ;t<arr[i].length;t++){
    
    if (arr[i][t].includes("chicken")){
     newArr.push(arr[i][t]);
    }
    }
    }
    arr=newArr;
    return newArr;
    
    }
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
