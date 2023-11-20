const myString = " I Love JavaScript"
const regex = /javaScript/
const containsRegex = regex.test(myString)
console.log(containsRegex)

//replace
const myRegex = /JavaScript/
let newString = myString.replace(myRegex, 'Kotlin')
console.log(newString)

//search
let newRegex = myString.search(/JavaScript/)
console.log(newRegex)

//match
const str = `A regular expression is a pattern that the regular expression engine attempts to match in input text. A pattern consists of one or more character literals, operators, or constructs. For a brief introduction, see .NET Regular Expressions`
let myRegex2 = str.match(/the/g)
console.log(myRegex2.length)

//Synchronous
console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3)
}, 3000)
console.log(4)
console.log(5)

//Callback
function userinfo(name, callback){
    setTimeout(() => {
        console.log('** User Info received **')
        callback(name)
    }, 3000)
}
let username = userinfo('khalid', name => {
    console.log(`Your name is ${name}`)
})

//peomise
const newuser = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const userinfo ={
            name: 'khlid',
            age: 19
        }
        resolve(userinfo)
    }, 3000)
    })
 newuser.then(res => {
    console.log('** user info reseived **')
    console.log(res)
 })

 //undefined Destructuring 
 let colors = ['red', 'green']
 let [firstcolor, secondcolor, thirdcolor = 'blue'] = colors
 console.log(firstcolor, secondcolor, thirdcolor)

let colors2 = ['pink', 'blue', 'gray']
let [,firstColor1,secondColor2] = colors2
console.log(firstColor1, secondColor2)

let numbers = [1, 2, [3, 4]]
let[first, second, third]= numbers


// L value R value

[colors[0], colors[1]] = ['blue', 'black', 'white']
console.log(colors)
  
let student ={
    name: 'Ali',
    age: 25,
}

let name = 'Saleh', age = 22;
({name, age} = student)
console.log(name, age)

let numbers3 = [1, 2, 3, 4, 5];
let[f, sec, ...others] = numbers3
console.log(f, sec, others)