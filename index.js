//CHAPTER #1
//Question:1
var x = "ERROR! Please enter a valid password. ";
alert(x);

//Question:2


alert("Welcome to JS Land...\n Happy coding");

var message1 = "Welcome to JS Land..";
alert(message1);

var message2 = "Happy coding\nPrevent this page for creating additional dialogs.";
alert(message2);


//ALERT
//Question:1
var x = "ERROR! Please enter a valid password. ";
alert(x);

//Question:2

//Chapter # 2

Question:1
var username = "John Doe";
document.write("My username is:" + username);

Question:2

var myname;
var FirstName = "Ali";
var LastName = "Ahmed";
alert(FirstName+" "+LastName);

var message;
message = "Hello World";
alert(message);

var stu_name = "Jhone Doe";
var stu_age = "15 years old";
var stu_certi = "Certified Mobile Application Development";
alert(stu_name);
alert(stu_age);
alert(stu_certi);

Question:5


var food = ["P" , "I" , "Z" , "Z" , "A"];
var copyFood = food.slice(0,5);
document.write(copyFood +"</br>"); 
var copyFood = food.slice(0,4);
document.write(copyFood +"</br>");
var copyFood = food.slice(0,3);
document.write(copyFood +"</br>");
var copyFood = food.slice(0,2);
document.write(copyFood +"</br>");
var copyFood = food.slice(0,1);
document.write(copyFood +"</br>");
"</br>"

//Question no:6

var email;
email = "Nimra@gmail.com";
alert("My email address is " +email);

//Question no:7

var book = "“A smarter way to learn JavaScript";
alert("I am trying to learn fron the Book " +book);

//Question no : 8
document.getElementById("p1");



alert("Welcome to JS Land...\n Happy coding");

var message1 = "Welcome to JS Land..";
alert(message1);

var message2 = "Happy coding\nPrevent this page for creating additional dialogs.";
alert(message2);


//Question no:1(1)
//For Addition
var num1 = 3;
var num2 = 5;
var total = num1 + num2;
document.write("The total Sum of 3+5 is "+total + "</br>");

//For substraction
var total2 = num1 - num2;
document.write("The total Substraction of 3-5 is "+total2 + "</br>");

//For multiplication
var total3 = num1 * num2;
document.write("The total Multiplication of 3*5 is "+total3 + "</br>");

var total4 = num1 / num2;
document.write("The total division of 3/5 is "+total4 + "</br>");

var total5 = num1 % num2;
document.write("The modulus of 3%5 is "+total5 + "</br>");

//(3)

var userValue = +prompt("Enter a number");
document.write("Your Intial Value is: " +userValue + "</br>");
var userValue1 = userValue + 1;
document.write("Your Value After Increment is: " +userValue1 + "</br>");
var userValue2 = userValue1 + 7;
document.write("Your value after Addition is: " +userValue2 + "</br>");
var userValue3 = userValue2 - 1;
document.write("Your value after Decrement is: " +userValue3 + "</br>");
var userValue4 = userValue3 % 3;
document.write("The remainder is: " +userValue4 + "</br>");


//(4)
var ticket = 600;
var userTicket = +prompt("How many tickets would you buy?");
var totalTicket = ticket * userTicket;
document.write("Total cost to buy  " + userTicket +" "+ "tickets to a movie is : " +totalTicket+ "PKR" + "</br>");


//(5)
for(i=1; i<=10; i++){
    document.write("4" + "x" + i + "=" + 4*i + "</br>");
}

//(7)
var item1 = 650;
document.write("price of item 1 is " +item1 + "</br>");
var quan1 = +prompt("Quantity of item 1 is? " + "</br>");
document.write("Quantity of item 1 is " +quan1 + "</br>");

var item2 = 100;
document.write("price of item 2 is " +item2 + "</br>");
var quan2 = +prompt("Quantity of item 2 is? " );
document.write("Quantity of item 1 is " +quan2 + "</br>");

var shipping = 100;
document.write("Shipping charges " +shipping + "</br>");

var totalCost1 = item1 * quan1;
document.write("Total cost of item 1 is: " +totalCost1 + "</br>");

var totalCost2 = item2 * quan2;
document.write("Total cost of item 2 is: " +totalCost2 + "</br>");

var totalCost = shipping + totalCost1 + totalCost2;
document.write("Total Cost of Your order is " +totalCost);

//(8)

var totalMarks = +prompt("Enter your total marks ");

var marksobt = +prompt("Enter marks obtained ");

var percentage = (marksobt/totalMarks)*100;

document.write("Total marks " +totalMarks + "</br>");

document.write("marks Obtained " +marksobt + "</br>");

document.write("Percentage " +percentage + "</br>");

var C = +prompt("Enter temperature in Celcius");
var F = (+C - 32) * (5/9);
document.write(+C+ "C" +" is " +F+ "F" +"</br>");

var C = +prompt("Enter temperature in Fahrenheit");
var F = (+C - 32) * (5/9);
document.write(+C+ "C" +" is " +F+ "F" +"</br>");


//Marksheet

var stu_rollno = +prompt("Enter Your Roll no");
document.write("Your roll no is " +stu_rollno +"</br>");

var sub1 = +prompt("Enter Marks of Subject 1");
document.write("Mark of subject 1 is " +sub1 +"</br>");

var sub2 = +prompt("Enter Marks of Subject 2");
document.write("Mark of subject 2 is " +sub2 +"</br>");

var sub3 = +prompt("Enter Marks of Subject 3");
document.write("Mark of subject 3 is " +sub3 +"</br>");

var total_marks = sub1 + sub2 + sub3;
document.write("Total Marks of " +stu_rollno+ " is " +total_marks +"</br>");

var marksOb = 300;
document.write("Marks Obtained is "+marksOb +"</br>")
var p = (total_marks/marksOb) * 100;
document.write("Your Percencentage is " +p +"%" +"</br>");


//9

var US = +prompt("Enter How many Dollars do you want to convert in PKR");
var valuePKR = +US * 104.80;
document.write("Total Currency in PKR is " +valuePKR);


//11
var Curr_year = +prompt("Enter Current Year");
document.write("Current Year " +Curr_year +"</br>");

var Birth_year = +prompt("Enter your Birth year");
document.write("Birth Year " +Birth_year +"</br>");

var age = Curr_year - Birth_year;
document.write("Your age is " +age +"</br>");


//12

var radius = +prompt("Enter Radius of a circle");
document.write("Radius of a Circle is " +radius +"</br>");

var pi = 3.142;
var circum = 2 * pi * radius;
document.write("The circumference is " +circum +"</br>");

var area = pi * (radius * radius);
document.write("Area of a Circle is: " +area +"</br>");



//10

var number = +prompt("Enter any number");


var number1 = number + 5;
//document.write("After Add 5" +number1);

var number2 = number1 * 10;
//document.write("After Multiply by 10 " +number2);

var number3 = number2/2;
//document.write("After Division " +number3);

document.write("Your number is: " +number + " ,"+ "After Add 5 is: " +number1+ " ,"+ "After Multiply by 10 is: " +number2 + " ," +"After Division is: " +number3);


//13

var snack = +prompt("Enter your favourite snack is");
document.write("Your Favourite snack is: " + snack +"</br>");

var age = +prompt("Enter Your Age");
document.write("Current Age is " +age +"</br>");

var max_age = 65;
document.write("Max Age is " +max_age +"</br>");

var perDay = +prompt("Enter Per day Amount of snack");
document.write("Amount of Snack per day is: " +perDay +"</br>");

var totalNeeded = (perDay * 365) * (max_age - age);
document.write("You will need " + totalNeeded + " chocolate chip to last you untill the ripe old age of " + max_age);



//CHApter 9-11

//(1)

var city = prompt("Enter Your City");
if(city === "karachi"){
    document.write("Welcome to the city of light " +city);
}
else{
    document.write("welcome to " +city + " the cleanest city of Pakistan ");
}



//(2)

var Gender = prompt("Enter your Gender");
if(Gender === "male"){
    document.write("Good Morning sir");
}
if(Gender === "female"){
    document.write("Good Morning Ma'am");
}


//(3)

var signalColor = prompt("write one of any signals color like red, blue, yellow")
if(signalColor === "red"){
    document.write("Must Stop")
}
if(signalColor === "green"){
    document.write("Move now")
}
if(signalColor === "yellow"){
    document.write("Ready To Move")
}


//(6)

//MarkSheet

var Student = +prompt("Enter Your Roll no");
document.write("Roll no is " +Student + "</br>");


var Student_name = prompt("Enter Your name");
document.write("Your Name " +Student_name + "</br>");


var marks1 = +prompt("Enter Your marks of first subject");
document.write("Marks of subject one is " +marks1 + "</br>");

var marks2 = +prompt("Enter Your marks of second subject");
document.write("Marks of subject two is " +marks2 + "</br>");

var marks3 = +prompt("Enter Your marks of third subject");
document.write("Marks of subject two is " +marks3 + "</br>");

var total = marks1 + marks2 + marks3;
document.write("Total Marks " +total +"</br>");

var marksObt = 300;
document.write("Marks obtained "+marksObt +"</br>")
var stu_percentage = (total/marksObt) * 100;
document.write("Percentage " +stu_percentage + "%" +"</br>");

if(stu_percentage >= 10 && stu_percentage < 39){
    document.write("Fail!! Your percentage is " +stu_percentage +"</br>");
}

if(stu_percentage >= 40 && stu_percentage < 50){
    document.write("Grade is D" + "</br>" + "You Need To Improve");
}
if(stu_percentage >= 50 && stu_percentage < 60){
    document.write("Grade is C" + "</br>" + "You Need To Improve");
}
if(stu_percentage >= 60 && stu_percentage < 70){
    document.write("Grade is B" + "</br>" + "You Need To Improve");
}
if(stu_percentage >= 70 && stu_percentage < 80){
    document.write("Grade is A" + "</br>" + "CONGRATULATION!! You Got " +stu_percentage + "%" );

}
if(stu_percentage >= 80 && stu_percentage < 90){
    document.write("Grade is A+" + "</br>" + "CONGRATULATION!! You Got " +stu_percentage + "%" );
    
}
if(stu_percentage >= 90 && stu_percentage < 100){
    document.write("Grade is A-1" + "</br>" + "CONGRATULATION!! You Got " +stu_percentage + "%" );
    
}

//(8)

var number = +prompt("Enter a number");
if(number % 3 === 0){
    document.write("Enterened number is divisible by 3")
}
else{
    document.write("Enterened number is not divisible by 3")
}

var even_num = +prompt("Enter a number");
if(even_num % 2 === 0){
    document.write("Enterened number is even");
}
else{
    document.write("Enterened number is odd");
}

//(10)
var T = +prompt("Enter current temperature");
if (T > 10 && T <= 20){
    document.write("OMG! Today’s weather is so Cool.")
}

else if(T > 20 && T <= 30){
    document.write("Today’s Weather is cool.")
}
else if(T > 30 && T <= 40){
    document.write("The Weather today is Normal.")
}
else if(T > 40 && T <= 50){
    document.write("It is too hot outside.")
}
else{
    document.write("It is too hot outside.")
}


//(11)

var char = prompt("Enter your alphabet ");
if(char >= "A" && char <= "Z"){
    alert("It is UpperCase letter")
}
else if(char >= "a" && char <= "z"){
    alert("It is LowerCase letter")
}
else{
    alert("It is not an Alphabet");
}



//Chapter 12-13
//(2)
var a = +prompt("Enter a first number");
var b = +prompt("Enter a second number");
if( a === b){
    alert("Both numbers are equal")
}
else if(a > b){
    alert("First Number is greater than Second Number");
}
else if(a < b){
    alert("Second Number is greater than the First Number");
}
else{
    alert("It is not a Number")
}

//(3)

var n = +prompt("Enter a number");
if(n === 0){
    alert("It is zero number")
}
else if(n > 0){
    alert("It is Positive number")
}
else if(n < 0){
    alert("It is negative number")
}
else{
    alert("It is not a number")
}


//(4)



//(5)
var User_pass = prompt("Please Enter Your Password");
var password = "NSMur@123";
if(User_pass === password){
    alert("“Correct! The password you entered matches the original password");
}
else if(User_pass != password){
    alert("Incorrect Password");
}


//(4)


 var V = prompt("Enter an Alphabet");
 var lowerCase = (V === "a" || V === "e" || V === "i" || V === "o" || V === "u");
 var UpperCase = (V === "A" || V === "E" || V === "I" || V === "O" || V === "U");
 if(lowerCase || UpperCase){
     alert("It is a vowel")
 }
 else{
    alert("It is a");
}


//(7)

var time = +prompt("Enter your time");
var time = 2100;
if(time >= 0000 && time < 1200){
    alert("Good Morning")
}
else if(time >= 1200 && time < 1700){
    alert("Good afternoon")
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening")
}
else if(time >= 2100 && time < 2359){
    alert("Good Night")
}
else{
    alert("It is not a time")
}

//Chapter 14-16
//Array

var arr = ["1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8"];
for(i = 0; i<10; i++){
    document.write(arr[i] )
    document.write("<br>")
}

//Practice

//CHAPTER 21 to 25
//Question # 1

var firstName = prompt("Enter Your First Name");
var fChars = firstName.toUpperCase();
var lastName = prompt("Enter Your Last Name");
var lChars = lastName.toUpperCase();
var fullName = fChars + " " +lChars;
alert("Your Full-Name is " +fullName);


//Question # 2

var string = prompt("Enter your favourite mobile phone model");
document.write("Your Favourite Mobile Model is "+string  +" </br>");
var string_length = string.length;
document.write("Length of String " +string_length +" </br>");

//Question # 3

var text = "Pakistan";
document.write("String: " +text +" </br>")
var indxNum = text.indexOf("n");
document.write("In Pakistan (index of 'n') is " +indxNum +" </br>");


//Question # 4

var str = "Hello World";
document.write("String: " + str +" </br>")
var str_Num = str.lastIndexOf("l");
document.write("In Hello World (index of 'l') is " +str_Num +" </br>");

//Question # 5

var str_Char = "Pakistani";
document.write("String: " + str_Char +" </br>")
var Str_Num = str_Char.charAt(3);
document.write("Character at Index '3': "+Str_Num);


//Question # 6

var firstName1 = prompt("Enter Your First Name");
var fChars1 = firstName1.toUpperCase();
var lastName2 = prompt("Enter Your Last Name");
var lChars2 = lastName2.toUpperCase();
var fullName = fChars1.concat(lChars2)
alert("Your Full-Name is " +fullName);

//Question # 7

var str_rep = "Hyderabad";
document.write("City: " + str_rep +" </br>");
var rep = str_rep.replace("Hyder" , "Islam");
document.write("After Replacement: "+rep);


//Question # 8

var message = "“Ali and Sami are best friends. They play cricket and football together.”;"
document.write(message +" </br>");
var msg = message.replace(/and/g , "&");
document.write("After Replacement 'and' with '&' : " +msg +" </br>");


//Question # 9

var value1 = "472";
parseInt(value1);
document.write("After Conversion String '472' to Integer/Number: " +value1);


//Question # 10

var user_input = prompt("Enter any word");
var input_conv = user_input.toUpperCase();
alert("Your Word is " + user_input + " " + "After Convert into UpperCase is " +input_conv);

//Question # 11

var user_input1 = prompt("Enter any word");
var FirstChar = user_input1.slice(0,1);
FirstChar = FirstChar.toUpperCase();

var otherChar = user_input1.slice(1);
otherChar = otherChar.toLowerCase();
var user_input1 = FirstChar +otherChar;
alert("Your Word After Convert first alphabet into UpperCase is " +user_input1);


//Question # 12

var num = 35.36;
var num_conv = num.toString();

var num2 = num_conv.replace("." , "");

document.write("Convert " + num+ " number to string is " +num2);


//Question # 13

var user_name = prompt("Enter user name");
for(i = 0 ; i<=user_name; i++){
    var user_char = user_name.charCodeAt(i);

}
if(user_char === 33 || user_char === 44 || user_char === 46 || user_char === 64 ){
    alert("invalid");
}



//CHAPTER 31 to 35

//Question(1)

var d = new Date();
document.write(d);



//Question(2)

function currentMonth(){
    var m = new Date();
    var monthName = new Array(12);
    monthName[0] = "January"
    monthName[1] = "February"
    monthName[2] = "March"
    monthName[3] = "April"
    monthName[4] = "May"
    monthName[5] = "June"
    monthName[6] = "July"
    monthName[7] = "August"
    monthName[8] = "September"
    monthName[8] = "October"
    monthName[10] = "November"
    monthName[11] = "December"

    alert("Current Month =  " + monthName[m.getMonth()]);

}

currentMonth();

//Question(3)

var d1 = new Date;
var a = d1.toString();
var y = a.slice(0,3);
document.write("Today is " +y);



//Question(4)

var f = new Date();
var u = f.getDay();
if(u === "Sunday" || u === "Sunday"){
    alert("It's Funday")
}
else{
    alert("It's Working Day");
}


//Question(5)

var f = new Date();
var t = f.getDate();
if(t < 16){
    alert("First fifteen days of the Month");
}
else{
    alert("Last fifteen days of the Month");
}

//Question(6)

var current_date = new Date();
var milimin = current_date.getTime();
var convert = milimin/(1000*60*60)

document.write("Current Date: " +current_date + "</br>");
document.write("Elapsed miliseconds since january 1, 1970: " +milimin + "</br>");
document.write("Elapsed minutes since january 1, 1970: " +convert + "</br>")


//Question(7)

var Current_Date = new Date();
var Current_hour = Current_Date.getHours();
if(Current_hour < 12){
    alert("It's PM")
}
else{
    alert("It's AM")
}
if (Current_hour === 0){
    Current_hour = 12
}
if(Current_hour > 12){

    Current_hour = Current_hour - 12

}

var curr_mim = Current_Date.getMinutes();
document.write(Current_hour + ":" + curr_mim + "</br>");


//Example

var dob = new Date("nov 9, 1996");
var dobmili = dob.getTime();



var today = new Date();
var todaymili = today.getTime();

var diff = todaymili - dobmili;

var dfYear = diff/(1000*60*60*24*30*12)

var accurateAge = Math.floor(dfYear)
document.write(accurateAge);


//Question(8)

var LaterDate = new Date("Dec 31, 2020");
document.write("Later date: "+LaterDate)


//Question(9)

var date1 = new Date("Dec 5, 2015");
var md1 = date1.getTime();

var date2 = new Date("Jan 1, 2015");
var md2 = date2.getTime();

var dif = md1 - md2;

var mdif = dif/1000;

var accDif = Math.floor(mdif);
document.write("On Reference Date " +date1 + ", " +accDif+ " seconds had passed since beginning of 2015");


//Question(10);

//Chapter 35 to 38

//Question(1);

function one(){
    var a = new Date();
    document.write(a);
}
one();

//Question(2);

function fullname(b,sp,c){

    return b + sp + c;
    
}
var b = prompt("Enter your First name");
    var c = prompt("Enter your Last Name");
    var sp = " ";
    alert(fullname(b,sp,c));
    


//Question(3);

function sum(d,e){
    return (d + e);
}
var d = +prompt("Enter your First number");
var e = +prompt("Enter your second number");
alert(sum(d,e));


//Question(4);

function calc(num1, opr, num2) {

    var num1 = +prompt("Enter your First number");
    var opr = prompt("Enter any Operator");
    var num2 = +prompt("Enter your second number");

    if (opr === "+") {
        return num1 + num2;

    }

    if (opr === "-") {
        return num1 - num2;
    }

    if (opr === "*") {
        return num1 * num2;
    }

    if (opr === "/") {
        return num1 / num2;
    }

}

document.write(calc());


//Question(5)

//Q: Write a function that squares its argument

function sums(num){
    
    for(i=0; i<=num; i++){
        var j = i * i;
        sum = j;

        
    }

    document.write("The sum of squares of a number " +num+ " is " +sum);
}
var num = +prompt("Enter your number");
sums(num);



//Question(6)

function factorial(facNum){

    var fact = 1
    if(facNum === 0 || facNum === 1){
        return fact;
    }
    else{
        for(var i = facNum; i >= 1; i--){
            fact = fact * i;
        }
        return fact;
    }

}
var facNum = +prompt("Enter a number");
var ans = factorial(facNum);
document.write("The factorial of " +facNum + " is " +ans)


//Question(7)

function count(){
    
    for(i=1; i<=secondNum; i++){
        
        document.write(i +"</br>");
    }
    
}
var i = 1;
var secondNum = +prompt("Enter a second num")
count();


//Question(8)

function outer(){
    function inner(){

    } 
}


//Question(9)

function AreaRect(width, height){
    document.write("Area Of a Resctangle is "+ (width + height));
    

}
var width = +prompt("Enter Width");
var height = +prompt("Enter Height");
AreaRect(width,height);


//CHAPTER # 38 to 44

//Question no:1
function expo(){
    var1 = +prompt("Enter a base number");
    var2 = +prompt("Enter an exponential number");
    var power = Math.pow(var1,var2);
    document.write(var2 +" is the power of " + var1 +" = " +power);
}
expo();


//Question no:2

function learYear(year){
    var Lyear = +prompt("Enter any year for check enter year is leaf or not");
    if(Lyear % 4 === 0){
        alert(Lyear + " This is leap year");
    }

    if(Lyear % 100 === 0){
        alert(Lyear + " This is leap year");
    }

    if(Lyear % 400 === 0){
        alert(Lyear + " This is leap year");
    }
    else{
        alert(Lyear + " This is not a leap year");
    }

}
learYear();


//QUESTION NO:3

function TriSides(){ 

    S = (a + b + c)/2
    return S;

}
var a = +prompt("Enter first side of a Triangle");
var b = +prompt("Enter second side of a Triangle");
var c = +prompt("Enter third side of a Triangle");
document.write("Semiparimeter of a Triangle is " +TriSides()) + "</br>" ;

function TriArea(){
    var Triangle = Math.sqrt(S * ((S - a) * (S - b) * (S - c))); 
    return Triangle;
    
}

document.write("Area Of a Triangle is " +TriArea()) +"</br>";


//QUESTION NO:4

var sub4 = +prompt("Enter Marks of Subject 1");
document.write("Mark of subject 1 is " + sub4 + "</br>");

var sub5 = +prompt("Enter Marks of Subject 2");
document.write("Mark of subject 2 is " + sub5 + "</br>");

var sub6 = +prompt("Enter Marks of Subject 3");
document.write("Mark of subject 3 is " + sub6 + "</br>");


var Total_marks = sub4 + sub5 + sub6;
//document.write("Total Marks of " + Total_marks + "</br>");
function Average() {
    return Total_marks;
}


var marksObt = 300;
document.write("Marks Obtained is " + marksObt + "</br>")
var percent = (Total_marks / marksObt) * 100;
//document.write("Your Percencentage is " +percent +"%" +"</br>");
function percentage() {
    return percent;
}

function Main() {
    document.write("Average is " + Average() +"</br>");
    document.write("Percentage is " + percentage() +"</br>");

}

Main();


//Question no:6
var word = prompt("Enter your Sentence to remove vowels in it");    
var convert_word = word.toLowerCase();

function removeVowels(){
    var newString = convert_word.replace(/[aeiou]/ig, '');
    return newString;
}

document.write(removeVowels(convert_word));



//Question no:7

var km_distance = +prompt("Enter your distance in kilometer(km)");
document.write("Distance in kilomerter is: " +km_distance + "</br>");

function meter(){
    var m = km_distance*1000;
    return m;
}
   
document.write("Distance convert kilometer to Meter is " +meter() + "m" + "</br>");

function centimeter(){
    var cm = km_distance * 1000 * 100;
    return cm;
}
   
document.write("Distance convert kilometer to Centimeter is " +centimeter() + "cm"  + "</br>");


function feet(){
    var f = km_distance * 3280.84;
    return f;
}
   
document.write("Distance convert kilometer to Feet is " +feet() + "ft" + "</br>");


function inch(){
    var inch1 = km_distance * 39370.08;
    return inch1;
}
   
document.write("Distance convert kilometer to Inch is " +inch() + "inch" + "</br>");


//Question no : 9

var count = 1; 
var workingHours; 
var overTime;

while (count <= 10) {
    document.write("Enter the working hours of employee no ", count);
    if (workingHours > 40) {
        overTime = workingHours - 40;
        over_time_pay = overTime * 12.00;
        document.write("Employee No overtime pay is", count, over_time_pay);
    }

    else{

        document.write("You have to work for more than 40 hours to get over time pay");

        count++;
    }
}





//Question no:8
function currencyDenomination() {
    var cash = 470 ; //  prompt("Enter cash (in hundreds): ");                              // You  can use prompt like this
    var hundred = parseInt(cash / 100);
    var fifty = parseInt((cash % 100) / 50);
    var ten = parseInt(((cash % 100) % 50) / 10);
    document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

}
currencyDenomination();







////////////////////// CHAPTER 43 to 48////////////////


//1

function message(){
    alert("Thans for purchasing a phone from us");
}


//2

function RemoveRow(){
    var tb = document.getElementById("row").remove();
}


//4
function ChangeImage(){
    var image = document.getElementById("car");
    image.src = 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/585a0786.jpg?itok=gZSRtIbt';
}

function RealImage(){
    var image = document.getElementById("car");
    image.src = 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
    
}


//5
function countAdd(){
    document.getElementById("count-input").value = parseInt(document.getElementById("count-input").value) + 1;
}


function countsubs(){
    document.getElementById("count-input").value = parseInt(document.getElementById("count-input").value) - 1;
}



//////////CHAPTER 49 to 52////////////

//2

function readMore() {

    var text1 = "which can be used to design program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior.";

    var paragraph = document.getElementById('para');
    paragraph.innerHTML = text1;
}

//1
function validation(){
    var name = document.getElementById("name").value;
    

    var email = document.getElementById("email").value;
    

    var error = document.getElementById("error-message");
    var text;

    if(name.length > 8){
        text = "Please enter name less than 8 characters";
        error.innerHTML = text;
        return false;
    }

    if(email.length < 8){
        text = "Please enter a valid email address email characters should be less than 8";
        error.innerHTML = text;
        return false;
    }

    alert("Form Submitted Succesfully")

    return true;
 }


































































































































































