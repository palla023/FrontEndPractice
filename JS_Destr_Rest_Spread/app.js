//Input - Requirement Func - OutPut
//Positive Flow - Real Time

// spread operator
var myArray_1 = [1,2,3];
var myArray_2 = [4,5,6];
//to combaine two arrays using spread operator
var result = [...myArray_1, ...myArray_2];

// for(var i = 0; i < myArray_2.length; i++) {
//     myArray_1.push(myArray_2[i]);
// }

// console.log('Final: ', result);

//Destructure;
var superHeros = ["Captian America", "Iron Man", "Hulk", "Ant Man"];

// var captian = superHeros[0]

/**
 * Destructurea array with variable
 * assigned default value to variables when value not preset it will take the default value.
 */
var [captian, iron, hulk, ant, black = null] = superHeros;

// console.log("Captian: ", captian);
// console.log("Iron Man: ", iron);
// console.log("Hulk: ", hulk);
// console.log("Ant Man: ", ant);
// console.log("Balck Wido: ", black);

//array split using spread
var [a, b, c, ...rest] = [1,2,3,4,5,6,7,8,9,10,11,12];
// console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);
// console.log("rest: ", rest);

//Skip a value from an array
var [x,,y] = [1,2,3];
// console.log("X: ", x)
// console.log("Y: ", y)

//remove duplicates from Array
var arr = [1,2,3,6,4,5,6,7,8,9,10,9,11,12,1,3,7,5];
// console.log(arr);
// console.log(arr.length);
var filteredArr = [...new Set(arr)];

// console.log(filteredArr);
// console.log(filteredArr.length);

//array map method

var dc = ["Super Man", "Bat Man", "Aqua Man"];
var users = ["Sai", "John", "Rajesh"];

// console.log(users.filter(function(user) { return user !== "Sai"}))

var result = dc.map(function(hero, index) {
    // return "dc_"+hero;
    if(hero === "Super Man") {
        return hero
    }

    return null
    // console.log(hero, index)
}).filter(function(item) { return item !== null });

// concat().map().filter().()


//chaining

//console.log('Hero: ', result)

var filteredHeros = dc.filter(function(hero) {
    return hero === "Super Man"
});

// console.log('filteredHeros: ', filteredHeros)

// for(var i = 0; i < dc.length; i++) {
//     if(dc[i] === "Super Man") {
//         console.log(dc[i]);
//     }
// }


//string

var arr = []

// var forms = "form1";
// console.log(typeof forms)
// if(typeof forms === "string") {
//     console.log(forms);
// } 

// forms = ["form1", "form2"]

// console.log(typeof forms)
// if(typeof forms === "object") {
//     console.log(forms[1]);
// }



// var username = "Will_Smith_Sai";
// console.log(username[8])
// var [firstname, lastname] = username.split("_");

// console.log("firstname: ", firstname, "lastname: ", lastname)

var firstname = "Will";
var lastname = "Smith";
console.log(firstname.concat(" ").concat(lastname))
