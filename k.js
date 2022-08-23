console.log("hey ganesh here");
const g = [
    {name : "ganesh", sub : "java" , marks : 40},
    {name : "praveen", sub : "machine learning" , marks : 42}
]

function en(gt){
     setTimeout( function(){
         g.push(gt);
         console.log("students are fetch");
     },3000);
}

function geten(){
    setTimeout( function(){
        let str= "";
        g.forEach(function(gt){
           str +=`<li>${gt.name}</li>`
           console.log("students are enroll");
        });
        document.getElementById('g').innerHTML =str;
    },8000);
}

let newstd={name : "rahil", sub : "Python" , marks : 42}
en(newstd);
geten();