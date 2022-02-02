'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {

    const length =str.length;
    const lastSpace = str.lastIndexOf(" ")+1;
    const result = str.slice(lastSpace,length ); 
    return result;


}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {

    const result = str.split(" ");
    return result[result.length - 1];

}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
   
    const arr = str.split(" ");
    arr.forEach(element => {
      switch (element){
        case  "I":
         return  arr.splice(arr.indexOf(element),1,"We");
           break; 
        
        case  "am" :
           return arr.splice(arr.indexOf(element),1,"are");
            break;
        
        case "was":
           return arr.splice(arr.indexOf(element),1,"were");
            break;
      }
        
    });
    return arr.toString().replace(/,/g, ' ');
}



// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {

    arr.splice(4,1,`${arr[4]},`);
    
    return arr.join(' ');

}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
   
    let string= str.charAt(0);
    let counter = 1;

    for(let i=1;i<str.length;i++) {
        if(str.charAt(i) == str.charAt(i-1)) {
            counter++;
        } else {
            
            string += counter + str.charAt(i);
            counter = 1;
        }
        if ( str.length - 1==i) {
            string += counter;
        }
        if (str.charAt(i) == " "){
            
            counter = "" ; 
            string = string ;
        }
    }
    return string;
}







module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };