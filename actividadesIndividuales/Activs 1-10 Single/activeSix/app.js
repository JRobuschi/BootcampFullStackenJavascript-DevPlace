const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("What is your name? ");

//let age = prompt("What is your age? ");

//console.log("Hello " + name + " you are " + age + " years old")


if(name == "juan"){
    console.log("Congratulations!!!")
}else{
    console.log("ERROR This is not the name")
}