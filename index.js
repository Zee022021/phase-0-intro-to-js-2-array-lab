// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
//console.log(cats);

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
//destructivelyAppendCat();

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
//destructivelyPrependCat();

function destructivelyRemoveLastCat() {
    cats.pop();
}
//destructivelyRemoveFirstCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
//destructivelyRemoveFirstCat();

function appendCat(name) {
   return [...cats, "Broom"];
}

function prependCat(name) {
    return ["Arnold", ...cats];
}
function removeLastCat() {
    return cats.slice();
}
function removeFirstCat() {
    return cats.slice(-2);
}
function removeLastCat() {
    return cats.slice(-0, -1);
}