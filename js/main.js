
function resetWatch(){
    const firstPart  = document.getElementById('first');
    const SecondPart  = document.getElementById('second');
    const ThirdPart  = document.getElementById('third');
    firstPart.innerHTML = "00";
    SecondPart.innerHTML = "00";
    ThirdPart.innerHTML = "00";
    first = 0;
    second = 0;
    third = 0;
    clearInterval(Interval);
}

function stopWatch(){
    clearInterval(Interval);
}

function startWatch(){
    clearInterval(Interval);
    Interval = setInterval(timer, 10);
}

let first = 0, second = 0, third = 0, Interval;
function timer() {
    const FirstPart  = document.getElementById('first');
    const SecondPart  = document.getElementById('second');
    const ThirdPart  = document.getElementById('third');
    first++;
    if(first<=9){
    ThirdPart.innerHTML = "0"+first;
    }
    else if(first<=99){
        ThirdPart.innerHTML = first;
    }
    else{
        second++;
        if(second<=9){
            SecondPart.innerHTML = "0"+second;
            
        }
        else if(second<=59){
            SecondPart.innerHTML = second;
                
        }
        else{
            third++;
            SecondPart.innerHTML = "00";
            second = 0;
            if(third<=9){
                FirstPart.innerHTML = "0"+third;   
            }
            else {
                FirstPart.innerHTML = third; 
                    
            }
        }
        ThirdPart.innerHTML = "00";
        first = 0 ;
    }
}