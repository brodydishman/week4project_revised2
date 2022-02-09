
let answer="";
let number=0;
let number2=0;
let result;

while(number!==10 && number2!==5){
    answer=prompt("How many attacks would you like to attempt?")
    number=number+Math.floor(Math.random() * answer)+1;
    number2=number2+Math.floor(Math.random() * 2)+1;
    if(number>=10){
        result="You have won!"
    }
    if(number2>=5)
        result="You have been slain..."
}

document.body.innerHTML="Damage you've taken:"+" " + number2 +" "+ "Damage you've dealt:" + number+" " + result;