const formEl = document.querySelector  (".form-wrapper");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list")// so i can append the new created into the ul list.

//retriving stored data from the local storage.
//json.parse help converts string to usable array since we can not store  strings.

let list =JSON.parse(localStorage.getItem("list"));
// console.log(list) 
list.forEach(task=>{
    toDoList(task)
})


formEl.addEventListener("submit",(event)=>
{
   event.preventDefault();
   //console.log(inputEl.value);
   toDoList();
   updateLocalStorage();
   
});

function toDoList(task)
{
   let newTask = inputEl.value; // targeting the values in the input-field.
   // creating new list using the javascript ,using createElement method
   if(task)
    {
      newTask = task.name  
    }

   const newList = document.createElement("li");
   
    if(task && task.checked)
     {
      newList.classList.add("checked")
   }
   newList.innerText = newTask;
   ulEl.appendChild(newList);
   inputEl.value = "";
   
   //creating a div container to for the check and the trash.
   const checkBtnEl = document.createElement("div");
   checkBtnEl.innerHTML ='<i class="fas fa-check-square"></i>';
   newList.appendChild(checkBtnEl);
   const trashBtnEl = document.createElement("div")
   trashBtnEl.innerHTML = '<i class=" fas fa-trash"></i>';
   newList.appendChild(trashBtnEl);
    // add event to the checkbox so any time there is click it will toggle the checked style to the finish task.
    checkedBtnEl=addEventListener("click", ()=>
        {
            newList.classList.toggle("checked");
    });
    trashBtnEl.addEventListener("click",()=>{
        newList.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
};


// Storing the list in the localstorage
function updateLocalStorage(){
    const newLists = document.querySelectorAll("li");
     list = [];
    newLists.forEach(newList=>{
        list.push({
            name: newList.innerText,
            checked: newList.classList.contains("checked")
        });
    });
    localStorage.setItem("list",JSON.stringify(list))
}
