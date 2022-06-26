function ageInDays(){
var birthyear=prompt("What year you were born in?");
var ageInDayss=(2018-birthyear)*365;

// var para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);

// var para = document.createElement("p");
// para.innerText = "This is a paragraph";
// document.body.appendChild(para);

// var pata=document.createElement("h1");
// pata.innerText="This is my name";
// document.body.appendChild(pata);

var para=document.createElement('h1');
var textAnswer=document.createTextNode('You are '+ageInDayss+' days');
para.setAttribute('id','ageInDays');
para.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(para);
}



function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="cat.jfif";
    div.appendChild(image);

}