// let inputEl = document.getElementById("inputField");
// let buttonEl = document.querySelectorAll("button");


// let string = "";
// let arr = Array.from(button);
// arr.forEach(button => {
//     button.addEventListener("click",(e) =>{
//         if(e.target.innerHTML === '='){
//             string = eval(string);
//             inputEl.value ="string";
//         }
        
//         string += e.target.innerHTML;
//         inputEl.value = string;
//     })


const buttonsEl = document.querySelectorAll("button");
const inputField = document.getElementById("inputField");
//console.log(calculatorEl);
for(let i = 0; i < buttonsEl.length; i++)
{
    buttonsEl[i].addEventListener("click",()=>{
       // console.log(calculatorEl[i].innerHTML);
        //const inputField = document.getElementById("inputField");
        //const buttonValue = this.innerHTML; 
        // you can use the above line to get the value of the button clicked
        //console.log(buttonsEl[i].textContent);
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "AC"){
            clearResult();
        }else if(buttonValue === "DEL"){
            deleteLastCharacter();
        }
        else if(buttonValue === "="){
            calculateResult()
        } 
        else{
            appendValue(buttonValue);
        }  


    })
}

//functions
function clearResult(){
    inputField.value = "";
}
function deleteLastCharacter(){
    inputField.value = inputField.value.slice(0,-1);
}

function calculateResult(){
    inputField.value = eval(inputField.value);
    //inputField.value = eval(2*5);
}

function appendValue(buttonValue){
    //inputField.value =  inputField.value +buttonValue
    inputField.value += buttonValue

}