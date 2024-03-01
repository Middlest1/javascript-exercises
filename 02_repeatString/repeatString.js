
function repeatString(theWord, numOfTimes) {

    if(numOfTimes < 0) {
        return "ERROR";
    }

    let theString = "";
    for(numOfTimes; numOfTimes > 0; numOfTimes--){
        theString = theWord + theString;
    }

    return theString;
}


repeatString("hey", 3);



// function repeatString(theWord, numberOfTimes) {

//     if (numberOfTimes < 0) {
//        return "ERROR";
//     }

//     let repeatedString = "";

//     while (numberOfTimes > 0) {
//         repeatedString = repeatedString + theWord;
//         numberOfTimes--;
//     }

//     return repeatedString;
// };

// repeatString("hey", 3);

// Do not edit below this line // const repeatString = 

module.exports = repeatString;
