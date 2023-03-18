// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
cats.push(name)
}

function destructivelyPrependCat(name){
cats.unshift(name)
}

function destructivelyRemoveLastCat(){
cats.pop()
}

function destructivelyRemoveFirstCat(){
cats.shift()
}

function appendCat(name){
    const cats = ['Milo', 'Otis', 'Garfield']
    const copycats = [...cats]
    copycats.push(name)
    return copycats
}

function prependCat(name){
    const cats = ['Milo', 'Otis', 'Garfield']
    const copycats = [...cats]
    copycats.unshift(name)
    return copycats
}

function removeLastCat(){
    const cats = ['Milo', 'Otis', 'Garfield']
    const copycats = [...cats]
    copycats.pop()
    return copycats
}

function removeFirstCat(){
    const cats = ['Milo', 'Otis', 'Garfield']
    const copycats = [...cats]
    copycats.shift()
    return copycats
}