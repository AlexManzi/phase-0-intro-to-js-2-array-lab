let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}
function appendCat(name) {
    let newCats = cats.slice(name);
    newCats.push(name)
    return newCats
}

function prependCat(name) {
    let newCats = cats.slice(name)
    newCats.unshift(name)
    return newCats
}

function removeLastCat(name) {
    let newCats = cats.slice(name)
    newCats.pop(name)
    return newCats
}

function removeFirstCat(name) {
    let newCats = cats.slice(name)
    newCats.shift(name)
    return newCats
}