let number = "";
let number2 = "";
let number3 = "";
let operator = "";
let numberbuttons = document.getElementsByClassName('nums');
let decimaled = false;
for (let i = 0; i < 10; i++) {numberbuttons[i].addEventListener('click', function(e){number+=this.innerText, number3="", updateScreen()})};

let operators = document.getElementsByClassName('ops');
for (let i = 0; i < 4; i++) {operators[i].addEventListener('click', function() {if (number!=""){number2 = number;  number = ""}; operator=this.innerText})}

let negPos = document.querySelector('.negPos');
negPos.addEventListener('click', function(){number=(number * -1).toString(), updateScreen()})

let decimal = document.querySelector('.dec');
decimal.addEventListener('click', function(){if ((number % 1 == 0) && (decimaled==false)) {number+="."; decimaled=true; updateScreen()}});

let percent = document.querySelector('.percent');
percent.addEventListener('click', function(){number=(Number(number)/100).toString(), updateScreen()});

let clearbtn = document.querySelector('.clear');
clearbtn.addEventListener('click', function(){number="", document.querySelector('#screen').innerText="0", decimaled=false;})

function updateScreen()
    {if (number.length < 10) {document.querySelector('#screen').innerText = number} else {document.querySelector('#screen').innerText='OVERFLOW'}; console.log(`number 1: ${number}, number 2: ${number2}, number 3: ${number3}, operator: ${operator}`)};

document.addEventListener("keydown", function(e) {if (e.code == 'Backspace') {number=number.slice(0, number.length-1)}; updateScreen()})

let equal = document.querySelector('.equal')
equal.addEventListener('click', function() {
    if (number2!="") {
        if (operator == "+") {
            number3=number;
            number = Number(number) + Number(number2);
            number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
            number2= "";
            updateScreen()
        } else {
            if (operator == "-") {
                number3=number;
                number =Number(number2) - Number(number);
                number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
                number2= "";
                updateScreen()
            } else {
                if (operator == "*") {
                    number3=number;
                    number =Number(number) * Number(number2);
                    number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
                    number2= "";
                    updateScreen()
                } else {
                    if (operator == "/") {
                        number3=number;
                        number =Number(number2)/Number(number);
                        number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
                        number2= "";
                        updateScreen()
                    }
                }
            }
    }
} else if (number3!="")  {
    if (operator == "+") {
    number = Number(number) + Number(number3);
    number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
    updateScreen()
} else {
    if (operator == "-") {
        number =Number(number) - Number(number3);
        number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
        updateScreen()
    } else {
        if (operator == "*") {
            number =Number(number) * Number(number3);
            number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
            updateScreen()
        } else {
            if (operator == "/") {
                number =Number(number)/Number(number3);
                number=(Math.round((number+Number.EPSILON)*1000)/1000).toString();
                updateScreen()
            }
        }
    }
}
    
}
})

