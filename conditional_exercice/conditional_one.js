//code-0-1
if (true) {
    console.log("foo") ;//foo
    }
    if (false) {
    console.log("bar") ;//bar
    }
    
    
    //code-0-2
    if (false || false) {
    console.log("boop") ;//ne s' affiche pas
    }
    if (true || false) {
    console.log("beep") ;//beep
    }
    
    //code-0-3
    let num = 30 ;
    if (num > 0) {
    console.log("zip") ;//zip
    }
    if (num % 2 === 0) {
    console.log("zoop") ;//zoop
    }
    
//code-0-4
let word = "jeep" ;
if (word[0] === "d") {
console.log("Correct") ;
} else {
console.log("Pas correct ") ;
}
// affiche Pas correct


//code-0-5
let sentence = "roger that" ;
if (sentence[sentence.length - 1] === "t") {
console.log(  " se termine par t") ;
} else {
console.log( sentence + " ne se termine pas par t") ;
}
//affiche se termine par t

if (sentence.length <= 4) {
console.log("court") ;
} else {
console.log("long") ;
}
//affiche long
    
    

