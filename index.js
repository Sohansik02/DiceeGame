var rand1=Math.random();
rand1=rand1*6;
rand1=Math.floor(rand1)+1;

var rand2=Math.random();
rand2=rand2*6;
rand2=Math.floor(rand2)+1;

function random1(){
    var rand1img="images/dice"+rand1+".png";
    var img1=document.querySelectorAll("img")[0].setAttribute("src",rand1img);
    document.querySelectorAll("p")[1].innerText="Player2 Turn";
}

function random2(){ 
    var rand2img="images/dice"+rand2+".png";
    document.querySelectorAll("p")[1].innerText="Thanks for Playing";
    var img2=document.querySelectorAll("img")[1].setAttribute("src",rand2img);
    comparer(rand1,rand2);
}
function comparer(rand1,rand2){
    if(rand1>rand2){
        document.querySelector("h1").innerHTML="Player 1 Wins";
    }
    else if(rand2>rand1){
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
}
document.querySelectorAll("p")[1].innerText="Player1 Turn";
var click=false;
if(click==false){
    document.querySelectorAll("button")[0].onclick=random1;
    click=true; 
}
if(click==true){
    document.querySelectorAll("button")[1].classList.remove("hide");
    document.querySelectorAll("button")[1].onclick=random2;
}
