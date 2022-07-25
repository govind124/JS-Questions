// Create a button , on click of which new Heading tag h1 should 
// be added with text as "MERN stack" on the screen above button


function helo(){
    document.getElementById("heading").innerText="Mern Stack"
}
//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function time(){
    let i= new Date().toLocaleTimeString();
    document.getElementById("clock").innerText=i;
}
let sec = 1000;
setInterval(time, sec);
document.getElementsByTagName("Div")

//Write code to get 1st H1 element from a webpage using DOM

function touchme() {
    document.getElementsByTagName("h1")[0].innerText="namste"
}

// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function hello(){
    document.getElementById('world').innerText="Welcome To Elevation Academy"
    
}

//Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

function clickhere(){
    document.getElementById("webbutton").style.display="none"

}
document.getElementsByTagName
//Given an array of 0's and 1's find out number of 0's

let arr = [1,0,1,1,1,1,1,0,0,0,0,0,3,4,5,56,67,7,8]
let count0 = 0
let count1 = 0
for(let i of arr){
	i===0?count0+=1:null
	i===1?count1+=1:null
}
console.log(count0, count1)

//Given an array find out total no. of odd and even nos.
let evenOdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12,14,16]
let odd = 0
let even = 0
for (let i = 0; i < evenOdd.length; i++) {
	arr[i] % 2 === 0 ? even++ : null
	arr[i] % 2 !== 0 ? odd++ : null
}
console.log(even, odd)

//Given a string find out number of vowels 
const arr5 = ['a','b','c','d','e','f','g','h','i']
function count(s) {
    return s.match(/[aeiou]/gi).length  
    }
count()

//Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

let obj1 = {
	name: "pritambar",
	hobbies: ["singing", "dancing"]
}
let obj2 = {
	name: "pushpendra",
	hobbies: ["singing", "dancing"]
}
function sameObj(obj1, obj2) {
	return JSON.stringify(obj1.hobbies) === JSON.stringify(obj2.hobbies)
}
console.log(obj1,obj2)




