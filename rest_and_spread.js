//ES5
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
//ES2015
const noOdds = (...nums) =>{
    return nums.filter(num => num % 2 === 0)
}
//New Functions
function findMin(...numbers) {
    return numbers.reduce((min,currentNum) => {
        return min < currentNum ? min : currentNum
    },undefined)
}
function mergeObjects(Obj1,Obj2) {
    return {...Obj1,...Obj2}
}
function doubleAndReturnArgs(arr,...nums) {
    const doubles = nums.map((num) => num * 2)
    return [...arr,...doubles]
}
//Arrow Functions
const removeRandom = (items) => {
    const randItem = Math.floor(Math.random() * items.length)
    const newItems = [...items]
    newItems.splice(randItem,1)
    return newItems
}
const extend = (array1, array2) => [...array1,...array2]
const addKeyVal = (obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val
    return newObj
}
const removeKey = (obj,key) => {
    const objCopy = {...obj}
    delete objCopy[key]
    return objCopy
}
const combine = (obj1, obj2) => ({...obj1, ...obj2})
const update = (obj, key, val) => {
    const newObj = {...obj}
    if (newObj.hasOwnProperty(key)){
        newObj[key] = val
    }
    return newObj
}