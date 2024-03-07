"use strict";
// TASK 01
console.log("");
console.log("TASK 01 ' Hello World'");
console.log("");
console.log("Hello World");
// TASK 02
console.log("");
console.log("TASK 02 'Personal message'");
console.log("");
var nameofperson = "usama Said: ";
var message1 = " do or die dont but Foot back";
var name_message = nameofperson + message1;
console.log(name_message);
// TASK 03
console.log("");
console.log("TASK 03 ' Name Cases '");
console.log("");
let stri = "hello world";
let upperCaseStri = stri.toUpperCase();
console.log(upperCaseStri);
let lowerCaseStri = stri.toLowerCase();
console.log(lowerCaseStri);
function ToTitleCase(stri) {
    return stri.toLowerCase().replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
let sentence = stri;
let TitleCase = ToTitleCase(sentence);
console.log(TitleCase);
// TASK 04
console.log("");
console.log("TASK 04 'Famous Quote'");
console.log("");
let Person = "Quaid-e-Azam!";
let quote = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man";
console.log(Person + " Said: " + quote);
// TASK 05
console.log("");
console.log("TASK 05 'Famouns Quote-2'");
console.log("");
let famousperson = "Quaid-e-Azam";
let Quote = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man";
let message2 = famousperson + " Said: " + Quote;
console.log(message2);
// TASK 06
console.log("");
console.log("TASK 06 'Strriping Names'");
console.log("");
let personname1 = "\t\n Usama Murtaza \n\t";
console.log("Orignal:" + personname1);
console.log("Stripped:" + personname1.trim());
// TASK 07 & 08
console.log("");
console.log("TASK 07 & 08 'Number Eight 08");
console.log("");
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// TASK 09
console.log("");
console.log("TASK 09 'Favourate Number'");
console.log("");
let favnumber1 = 10;
console.log("My favourate Number is:" + favnumber1);
// TASK 10
console.log("");
console.log("TASK 10 'Adding Comment'");
console.log("");
let favnumber3 = 10;
//console.log("My favourate Number is: "+favnumber3);
console.log("My favourate Number is: " + favnumber3);
// TASK 11
console.log("");
console.log("TASK 11 'Using Array[]'");
console.log("");
let names = ["Usama", "Ali", "Dayyan", "Adnan", "Zubair"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
// TASK 12
console.log("");
console.log("TASK 12 'Greetings'");
console.log("");
let names2 = ["Usama", "Ali", "Dayyan", "Adnan", "Zubair"];
let messages = "Do you Like To Play football?";
console.log(names2[0] + " " + messages);
console.log(names2[1] + " " + messages);
console.log(names2[2] + " " + messages);
console.log(names2[3] + " " + messages);
console.log(names2[4] + " " + messages);
// TASK 13
console.log("");
console.log("TASK 13 'Your Own Array'");
console.log("");
let vichel = ["Honda 125", "Honda Civic", "Suzuki 150", "Corolla"];
vichel.map((items) => console.log('I would Like To Owna a ' + items));
// TASK 14
console.log("");
console.log("TASK 14 'Guest List'");
console.log("");
let guest = ["usama", "sabir", "babar"];
guest.map((invite) => (console.log('Dear' + ", " + invite + " You are invited for Dinner")));
// TASK 15
console.log("");
console.log("TASK 15 'Changing Guest List'");
console.log("");
let GuestArray = ["Usama", "Sabir", "Babar", "Asad"];
let CantInvite = "Usama";
console.log(CantInvite + " You are not Invited");
let NewGuest = "Adnan";
GuestArray[GuestArray.indexOf(CantInvite)] = NewGuest;
GuestArray.map((item) => console.log("Dear, " + item + " you are Invited for dinner"));
// TASK 16
console.log("");
console.log("TASK 16'More Guests'");
console.log("");
let guestarray = ["Alishba", "usama", "sabir", "Ali"];
let cantinvite = "Alishba";
let newguest = "Khan";
guestarray[guestarray.indexOf(cantinvite)] = newguest;
console.log(guestarray);
guestarray.map((items) => console.log("dear," + items + " I have a Bigger Dinner Plan"));
// TASK 17
console.log("");
console.log("TASK 17 'Shrinking Guest List'");
console.log("");
let guest01 = ["ali", "Asad", "hassan", "Kamran", "kashif"];
while (guest01.length > 2) {
    const removeguest = guest01.pop();
    console.log("sorry " + removeguest + " Your Are Not invited");
}
guest.forEach((guest) => {
    console.log("congratulation, " + guest + " Your are Invited");
});
//guest final
let guest02 = ["usama", "ayan", "sabir"];
guest02.pop();
guest02.pop();
console.log("Final guest: ", guest02);
//task 18
console.log("");
console.log("TASK 18 'Seeing the World'");
console.log("");
//orignal oreder for country
let countryForVisit = ["Pakistan", "Tokyo", "China", "Africa", "Canada"];
console.log("Orignal order is: ", countryForVisit);
//Alphabetic order
console.log("Alphabatic Order is:", countryForVisit.sort());
//orignal order after sorting
console.log("Orignal Order After Sorting:", countryForVisit);
//sorting in reverse alphabetic order
console.log("Reverse Alphabetic Order is:", countryForVisit.sort().reverse());
//orignal order after sorting
console.log("Orignal Order After Sorting:", countryForVisit);
//reverse order 
countryForVisit.reverse();
console.log("Reverse Order is:", countryForVisit);
//orignal order
countryForVisit.reverse();
console.log("orignal order is :", countryForVisit);
//sorted alphabet order
countryForVisit.sort();
console.log("sorted order in alphabet ", countryForVisit);
//sorted reverse alphabetic order
countryForVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetic order:", countryForVisit);
//TASK 19
console.log("");
console.log("TASK 19 'Dinner Guests'");
console.log("");
let guest2 = ["usama", "sabir", "babar"];
guest2.map((invite) => (console.log('Dear' + ", " + invite + " You are invited for Dinner")));
//TASK 20
console.log("");
console.log("TASK 20 'Think of something you could store in a array'");
console.log("");
let country = ["Pakistan", "China", "Afghanistan", "Dubai"];
console.log("List of Country");
console.log(country);
let languages = ["Urdu", "English", "Spanish", "Chainese"];
console.log("List of languages");
console.log(languages);
//TASK 21
console.log("");
console.log("TASK 21 'They think of something you could store in a TypeScript Object'");
console.log("");
let person = { name: "Usama", fname: "Usama Murtaza", age: 21 };
console.log(person);
//TASK 22
console.log("");
console.log("TASK 22 'Intentional Error'");
console.log("");
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(days{4});
console.log(days[6]);
//TASK 23
console.log("");
console.log("TASK 23 'Conditional Tests'");
console.log("");
let car = "Mehran";
console.log("Is car == Mehran?");
console.log(car == "Mehran");
console.log("Is car != Mehran?");
console.log(car != "mehran");
console.log("Is car != Mehran?");
console.log(car != "mehraN");
console.log("Is car.length ==6? Pridict True");
console.log(car.length == 6);
console.log("Is car.length =!6? Pridict false");
console.log(car.length != 6);
console.log("Is car.length =!12? Pridict True");
console.log(car.length != 12);
console.log(" if 10>35 Pridict false");
console.log(10 > 35);
console.log(" if 10>3 Pridict true");
console.log(10 > 3);
console.log("If car =='Mehran' && car Length==6 Pridict true");
console.log(car == "Mehran" && car.length == 6);
console.log("If car =='Mehran' && car Length==5 Pridict false");
console.log(car == "Mehran" && car.length == 5);
// TASK 24
console.log("");
console.log("TASK 24 'More Conditional Tests'");
console.log("");
const fruit1 = "apple";
const fruit2 = "banana";
console.log(fruit1 === fruit2);
console.log(fruit1 !== fruit2);
const originalString = "Hello, TypeScript!";
const lowerCaseString = originalString.toLowerCase();
console.log(lowerCaseString);
//Numerical Tests Involving Equality and Inequality    03
const num1 = 10;
const num2 = 20;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// TASK 25
console.log("");
console.log("TASK 25 'Alien Color 01'");
console.log("");
let AlineColor = "Green";
if (AlineColor == "Green") {
    console.log("Player Earned 05 points");
}
let AlineColor2 = "Red";
if (AlineColor2 == "Red") {
    console.log("No Output");
}
let AlineColor3 = "Green";
if (AlineColor2 == "Red") {
    console.log("No Output");
}
//TASK 26
console.log("");
console.log("TASK 26 'Alien Color 02'");
console.log("");
let AlienColor4 = "Yellow";
if (AlienColor4 == "Yellow") {
    console.log("Player Earned 10 points");
}
else {
    console.log("Player Earned 05 Points");
}
//TASK 27
console.log("");
console.log("TASK 27 'Alien Color 03'");
console.log("");
let AlienColor5 = "Red";
if (AlienColor5 == "Green") {
    console.log("Player Earned 05 Points");
}
else if (AlienColor5 == "Yellow") {
    console.log("Player Earned 10 points");
}
else if (AlienColor5 == "Red") {
    console.log("Player earned 15 points");
}
//TASK 28
console.log("");
console.log("TASK 28 'Stage of life'");
console.log("");
let PersonAge = 13;
if (PersonAge < 2) {
    console.log("Person is a baby");
}
else if (PersonAge == 2 && PersonAge < 4) {
    console.log("Person is Todler");
}
else if (PersonAge == 4 && PersonAge < 13) {
    console.log("Person is a Kid");
}
else if (PersonAge == 13 && PersonAge < 20) {
    console.log("Person is Teenager");
}
else if (PersonAge == 20 && PersonAge < 65) {
    console.log("Person is Adult");
}
//TASK 29
console.log("");
console.log("TASK 29 'Stage of life'");
console.log("");
let FavourateFruit = ["Banana", "Apple", "Graphs", "Gava", "Orange", "Peach", "Berry", "Tomato"];
if (FavourateFruit.includes("Banana")) {
    console.log("Banana");
}
if (FavourateFruit.includes("Peach")) {
    console.log("You Really Like Banana");
}
if (FavourateFruit.includes("Orange")) {
    console.log("Orange");
}
if (FavourateFruit.includes("Berry")) {
    console.log("You Really Like Banana");
}
if (FavourateFruit.includes("Graphs")) {
    console.log("Graphs");
}
if (FavourateFruit.includes("Tomato")) {
    console.log("You Really Like Banana");
}
if (FavourateFruit.includes("Gava")) {
    console.log("Gava");
}
//TASK 30
console.log("");
console.log("TASK 30 'Hello Admin'");
console.log("");
let Users = ["Admin", "Usama", "Sabir", "Ali", "Saad"];
for (let user of Users) {
    if (user === "Admin") {
        console.log("Hello Admin, Would you Like to see Status report");
    }
    else {
        console.log("Hello " + user + " Thank you for Login");
    }
}
//TASK 31
console.log("");
console.log("TASK 31 'No Users'");
console.log("");
let Users2 = ["Admin", "Usama", "Sabir", "Ali", "Saad"];
if (Users2.length == 0) {
    console.log("We need to find some users! ");
}
else {
    for (let user2 of Users2) {
        if (user2 === "Admin") {
            console.log("Hello Admin, Would you Like to see Status report");
        }
        else {
            console.log("Hello " + user2 + " Thank you for Login");
        }
    }
}
let user3 = [];
if (user3.length === 0) {
    console.log("We need to find some users! ");
}
//TASK 32
console.log("");
console.log("TASK 32 'Checking Usernames'");
console.log("");
let CurrentUsers = ["Admin", "Usama", "Sabir", "Ali", "Saad"];
let NewUsers = ["Admin", "Asad", "Sabir", "Saleem", "Saad"];
let CurrentUsersLower = CurrentUsers.map(user => user.toLowerCase());
for (let NewUsers2 of NewUsers) {
    if (CurrentUsersLower.includes(NewUsers2.toLowerCase())) {
        console.log("Sorry " + NewUsers2, "that is taken");
    }
    else {
        console.log("Yes" + NewUsers2, "is Still In Avalible list");
    }
}
//TASK 33
console.log("");
console.log("TASK 33 'Ordinal Numbers'");
console.log("");
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number4 of numbers4) {
    if (number4 === 1) {
        console.log(number4 + "st");
    }
    else if (number4 === 2) {
        console.log(number4 + "nd");
    }
    else if (number4 === 3) {
        console.log(number4 + "rd");
    }
    else {
        console.log(number4 + "th");
    }
}
//TASK 34
console.log("");
console.log("TASK 34 'Pizzas'");
console.log("");
let FavouratePizza = ["Pepperoni", "Chicken", "Veg"];
for (let pizza of FavouratePizza) {
    console.log("I Really Like " + pizza + " pizza");
}
console.log("I love Pizza");
//TASK 35
console.log("");
console.log("TASK 35 'Animals'");
console.log("");
let FavourateAnimal = ["Cat", "Dog", "Mouse"];
for (let Animal of FavourateAnimal) {
    console.log("A " + Animal + " has a Tail");
}
console.log("I love Pet Animal");
//TASK 36
console.log("");
console.log("TASK 36 'T-Shirt'");
console.log("");
function makeShirt(size, text, neckSize) {
    console.log("You order a T-Shirt" + size + " Shirt That Say " + text + " & neck is: " + neckSize + " inch");
}
makeShirt("Medium", "I am a Programer", 14);
makeShirt("Large", "I am a Bussnessman", 19);
makeShirt("Small", "I am a Student", 10);
//TASK 37
console.log("");
console.log("TASK 37 'Large Shirts'");
console.log("");
function makeShirt2(size2 = 'Large ', text2 = ' I love Typescript') {
    console.log("You have order a " + size2 + " That Says " + text2);
}
makeShirt2();
makeShirt2("Medium");
makeShirt2("Small", "I need a Polo Shirt");
//TASK 38
console.log("");
console.log("TASK 38 'Large Shirts'");
console.log("");
function DescribeCity(city, country2 = "Pakistan") {
    console.log(city + "is in " + country2);
}
DescribeCity("karachi");
DescribeCity("France", "Europe");
DescribeCity("Lahore", "Pakistan");
//TASK 39
console.log("");
console.log("TASK 39 'City Names'");
console.log("");
function DescribeCity2(city3, country3 = "Pakistan") {
    return `${city3},${country3}`;
}
let c1 = DescribeCity2("lahore", "Pakistan");
let c2 = DescribeCity2("Karachi", "Pakistan");
let c3 = DescribeCity2("Hyderabad", "Pakistan");
console.log(c1);
console.log(c2);
console.log(c3);
//TASK 40
console.log("");
console.log("TASK 40 'Album'");
console.log("");
function MakeAlbum(artist, Title) {
    const Disctionery = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        Title: Title.charAt(0).toUpperCase() + Title.slice(1)
    };
    return Disctionery;
}
let album = MakeAlbum("Ali", "Light");
console.log(album);
album = MakeAlbum("Sidhu", "Dark Live");
console.log(album);
album = MakeAlbum("Saad", "bright");
console.log(album);
//TASK 41
console.log("");
console.log("TASK 41 'Magicians'");
console.log("");
function ShowMagics(Magicians) {
    for (const magician of Magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Ali", "Hamza", "Sabir"];
ShowMagics(magician);
//TASK 42
console.log("");
console.log("TASK 42 'Great Magicians'");
console.log("");
function makeGreate(magician2) {
    for (let i = 0; i < magician2.length; i++) {
        magician2[i] = magician2[i] + " The Great magician";
    }
}
const magician3 = ["Ali", "Hamza", "Sabir"];
makeGreate(magician3);
function show_magician2(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
show_magician2(magician3);
//TASK 43
console.log("");
console.log("TASK 43 'Unchanged Magicians'");
console.log("");
function makeGreat(magicians) {
    const modifiedMagicians = [...magicians];
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] += " The Great";
    }
    return modifiedMagicians;
}
function showMagicians(magicians) {
    console.log("Original Magicians:");
    console.log(magicians.join(", "));
    const modifiedMagicians = makeGreat(magicians);
    console.log("\nModified Magicians (with 'The Great'):");
    console.log(modifiedMagicians.join(", "));
}
const originalMagicians = ["Ali", "Hamza", "Sabir"];
showMagicians(originalMagicians);
//TASK 44
console.log("");
console.log("TASK 44 'Sandwiches'");
console.log("");
function createSandwich(...ingredients) {
    if (ingredients.length === 0) {
        console.log("You ordered an empty sandwich. Please add some ingredients!");
    }
    else {
        console.log("Your sandwich includes:");
        for (const ingredient of ingredients) {
            console.log(`- ${ingredient}`);
        }
    }
}
createSandwich("Turkey", "Lettuce", "Tomato");
createSandwich("Peanut Butter", "Jelly");
createSandwich();
//TASK 45
console.log("");
console.log("TASK 45 'Cars'");
console.log("");
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", "Camry", { color: "red", year: 2022 });
console.log(myCar);
