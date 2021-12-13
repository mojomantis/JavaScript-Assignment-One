

// QUESTION 16 / 18 / 20 ..

// // Q 1)

var inputValueG;
inputValueG = prompt("enter number divided by 3");
inputValueG = Number(inputValueG);

if(inputValueG % 3 === 0 && inputValueG !== 0){
   console.log("divisible by three");
} 
else{
   console.log("not divisible by three");
}


// //Q2)
inputValueG = prompt("enter number for even or odd");
inputValueG = Number(inputValueG);
if(inputValueG !== 0){
if(inputValueG % 2 === 0){
   console.log("even");
} 
else{
   console.log("odd");
}
}
else{
   console.log("math error");
}


// //Q3
inputValueG = prompt("enter number for old or younger than 18");
inputValueG = Number(inputValueG);

if(inputValueG >= 18){
   console.log("Old enough i.e greater than 18");
} 
else{
   console.log("Too young i.e younger than 18");
}

//Q4
var nameDisplay =  prompt("Enter you first name");
var inputValueG2 = nameDisplay.toUpperCase();

if(inputValueG2 === "YASIR"){
   console.log("Hello " + nameDisplay);
}

// //Q5

inputValueG = prompt("enter number divided by 3");
inputValueG = Number(inputValueG);

switch(inputValueG %3 === 0) {
   case (true):
   {console.log(inputValueG + "is divisible by 3");}
     break;
   case (false):
   {console.log(inputValueG + " is not divisible by 3");}
     break;
     
 }
// //Q6

// // Write a program that takes a character(number or string) in a
// // variable & checks whether the given input is a number,
// // uppercase letter or lower case letter. (Hint: ASCII codes:-
// // A=65, Z=90, a=97, z=122)

inputValueG = prompt("enter a single character (number or string)");
inputValueG2 = inputValueG.charCodeAt();

if (inputValueG2 >= 49 && inputValueG2 <= 57){
   console.log(inputValueG + " is a number.");
}
else if (inputValueG2 >= 65 && inputValueG2 <= 90){
   console.log(inputValueG + " is an uppercase letter");
}
else if (inputValueG2 >= 97 && inputValueG2 <= 122){
   console.log(inputValueG + " is a lowercase letter");
}
else{
   console.log(inputValueG + " is a symbol");
}

// //Q7


inputValueG = prompt("enter num1");
inputValueG = Number(inputValueG);
inputValueG2 = prompt("enter num2");
inputValueG2 = Number(inputValueG2);
var inputValueG3 = prompt("enter operator");

switch(inputValueG3) {
   case ("+"):
   {console.log(inputValueG + inputValueG2);}
     break;
   case ("-"):
   {console.log(inputValueG - inputValueG2);}
     break;
     case ("*"):
   {console.log(inputValueG * inputValueG2);}
     break;
     case ("/"):
   {console.log(inputValueG / inputValueG2);}
     break;
     case ("%"):
   {console.log(inputValueG % inputValueG2);}
     break;
     default :
     {console.log("valid input not entered");}
     
 }

//  //Q8

 inputValueG = prompt("enter Time in 4-digits 24 hours format (1900 = 7pm)");
inputValueG = Number(inputValueG);

if(inputValueG >= 0000 && inputValueG < 1200){
console.log("morning");
}
else if(inputValueG >= 1200 && inputValueG < 1700){
   console.log("afternoon");
}
else if(inputValueG >= 1700 && inputValueG < 2100){
   console.log("evening");
}
else if(inputValueG >= 2100 && inputValueG < 2359){
   console.log("night");
}
else{
   console.log("invalid input");
}

// //Q9

// If the year is evenly divisible by 4, go to step 2. ...
// If the year is evenly divisible by 100, go to step 3. ...
// If the year is evenly divisible by 400, go to step 4. ...
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

inputValueG = prompt("enter year in 4-digits");
inputValueG = Number(inputValueG);

if(inputValueG %4 === 0 && inputValueG %100 === 0 && inputValueG %400 === 0){
   console.log(inputValueG + " is a leap year");
   let numberOfDays = (inputValueG %400);
   
}
else if(!(inputValueG %4 === 0 && inputValueG %100 === 0 && inputValueG %400 === 0)){
   console.log(inputValueG + " is not a year");
   let numberOfDays = (inputValueG %400);
   
}
else{
   console.log(inputValueG + " is an invalid input");
}


// //Q10

// // Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then give
// // message “ Please enter your password”
// // ii. Check if both passwords are same. If they are same,
// // show message “Correct! The password you entered
// // matches the original password”. Show “Incorrect
// // password” otherwise.


inputValueG = "Faraz@123";
var inputValueG4;

inputValueG4 = prompt("Enter a password");

if (inputValueG === inputValueG4){
   console.log("Password accepted");
}
else{
   console.log("password not valid");
   do{inputValueG4 = prompt("Enter a password");}
while (inputValueG4 === NaN || inputValueG4 === null || (!(inputValueG === inputValueG4)) );
}

// //Q11

// // Write a program that adds an else statement to the following
// // script to display “You are not Fahad”


var firstName = "Ali";
if (firstName === "Fahad") {
 document.write("Hello Fahad!");
}

var firstName = "Ali";
 if (firstName === "Fahad") {
  document.write("Hello Fahad!");
 }
 else{
    document.write("you are not Fahad");
 }

 //Q12

 var greeting;
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day";
}
 else{
 greeting = "Good evening";
 } 

//  //Q13

 
inputValueG = prompt("enter num1");
inputValueG = Number(inputValueG);
inputValueG2 = prompt("enter num2");
inputValueG2 = Number(inputValueG2);

if ((inputValueG - inputValueG2) > 0){
   console.log(inputValueG + " is greater than" + inputValueG2);
}
else if(inputValueG === inputValueG2){
   console.log(inputValueG + " is equal to" + inputValueG2);
}
else{
console.log(inputValueG2 + " is greater than " + inputValueG);
}


// //Q14
inputValueG = prompt("enter num1");
inputValueG = Number(inputValueG);

if (inputValueG > 0){
   console.log("POSITIVE");
}
else if(inputValueG < 0){
   console.log("NEGATIVE");
}
else{
console.log("IS ZERO");
}

// //Q15

// . Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)



inputValueG = prompt("enter hour in this format (3pm or 5am)");
var timeArray = inputValueG.split("");
var check = timeArray[timeArray.length-2];
if (check ==="a"){
   if (timeArray.length===3){
      timeArray.pop();
      timeArray.pop();
      timeArray = timeArray.map(Number);
      for(let i= 1; i < 3; i++){
         timeArray.push(0);
      }
      timeArray.unshift(0);
   }
   else if (timeArray.length===4){
      timeArray.pop();
      timeArray.pop();
      timeArray = timeArray.map(Number);
      for(let i=2; i < 4; i++){
         timeArray.push(0);
      }
      

   }
   timeArray = timeArray.join("");
   timeArray = Number(timeArray);
   console.log(timeArray);
}
else if (check ==="p"){
   if (timeArray.length===3){
      timeArray.pop();
      timeArray.pop();
      timeArray = timeArray.map(Number);
      for(let i= 1; i < 3; i++){
         timeArray.push(0);
      }
      timeArray.unshift(0);
   }
   else if (timeArray.length===4){
      timeArray.pop();
      timeArray.pop();
      timeArray = timeArray.map(Number);
      for(let i=2; i < 4; i++){
         timeArray.push(0);
      }
      

   }
   
   timeArray = timeArray.join("");
   console.log(timeArray);
   
   timeArray= Number(timeArray);
   console.log(timeArray);
   timeArray= timeArray + 1200;
   
   

}
console.log(timeArray);
if (timeArray >= 0600 && timeArray <= 0900){
   console.log("breakfast is served");
   
}
else if (timeArray >= 1100 && timeArray <= 1300){
   console.log("time for lunch");
}
else if (timeArray >= 1700 && timeArray <= 2000){
   console.log("time for dinner");
}

else{
   console.log("Sorry, you'll have to wait, or go get a snack.");
   console.log(timeArray);
}


// //Q16
// // Write a program that stores value in a variable & tell whether
// // the type of that variable is a "number", "string", "boolean" or
// // “undefined”


inputValueG = prompt("check for number, string, boolean or undefined");
console.log(typeof (inputValueG));

//Q17
inputValueG = prompt("input a character to check if its vowel or not");
switch(inputValueG) {
   case ("a" || "A"):
   {console.log("vowel");}
     break;
   case ("e" || "E"):
   {console.log("vowel");}
     break;
     case ("i" || "I"):
   {console.log("vowel");}
     break;
     case ("o" || "O"):
   {console.log("vowel");}
     break;
     case ("u" || "U"):
   {console.log("vowel");}
     break;
     default :
     {console.log("not vowel");}
     
 }


//  //Q18

// //  . Choose the correct comparison operator to display "true",
// // when:
// // 10 is NOT equal to 8.

var ten = 10;
var eight = 8;
alert(ten !== eight);

//Q19
inputValueG = prompt("enter month number from jan to march");
switch(inputValueG) {
   case ("1"):
   {console.log("jan");}
     break;
   case ("2"):
   {console.log("feb");}
     break;
     case ("3"):
   {console.log("mar");}
     break;
     case ("4"):
   {console.log("apr");}
     break;
     case ("5"):
   {console.log("may");}
     break;
     default :
     {console.log("invalid month");}
     
 }

 //Q20
 
 var checkAge = prompt("enter your age.");
 
var rightAge = (checkAge >= 18) ? "old enough" : "too young";
console.log(rightAge);