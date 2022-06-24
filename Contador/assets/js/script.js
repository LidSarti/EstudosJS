let cont = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    cont++;
    CURRENT_NUMBER.innerHTML = cont;
    changeStyle()
}

function decrement(){
    cont--;
    CURRENT_NUMBER.innerHTML = cont;
    changeStyle()
}

function changeStyle(){
    if (cont < 0){
        CURRENT_NUMBER.style.color = 'violet';
    }
    else{
        CURRENT_NUMBER.style.color = 'black';
    }
}