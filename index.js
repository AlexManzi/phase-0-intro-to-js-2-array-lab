let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop(name)
}
function destructivelyRemoveFirstCat() {
    cats.shift(name)
}
function appendCat(name) {
    let newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
function prependCat(name) {
    let newCats = cats.slice();
    newCats.unshift(name);
    return newCats;
}
function removeLastCat() {
    let newCats = cats.slice();
    newCats.pop(name);
    return newCats;
}
function removeFirstCat() {
    let newCats = cats.slice();
    newCats.shift(name);
    return newCats;
}
