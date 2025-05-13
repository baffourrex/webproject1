//get variables
const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.querySelector("#add-task");
const inputSearch = document.getElementById("search-input");
const taskList = document.querySelector(".task-list");
const clearAllBtn = document.querySelector(".clear-all");

// add a task
//? click on add task 
addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //! check if the input task is not empty
if (inputTask.value !==''){
   //! get our input value and trim
const taskText = inputTask.value.trim();
console.log(taskText);
//!crete a new li
const newLi = document.createElement("li");
newLi.className = "task";
//!crete an input field -> type of text, disabled, class name of disabled task
const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.disabled = true;
taskInput.className = "disabled-task";
//!put rhe input trimmed value into disabled task input
taskInput.value = taskText;
//!put the input field that contain the task into the new li
newLi.appendChild(taskInput);
//!crate the delete btn and -> class of delete-btn, delete button
const deleteBtn = document.createElement('button');
deleteBtn.innerText = "Delete";
deleteBtn.className = "deleteBtn";
//! put the delete btn into the li
newLi.appendChild(deleteBtn);
//! create an edit btn with class of edit btn
const editBtn = document.createElement('button');
editBtn.innerText = "Edit";
editBtn.className = "editBtn";
//! put the edit btn into the li too
newLi.appendChild(editBtn);
//! put the new li that contains all the info into the task list
taskList.appendChild(newLi);
//clear input task
inputTask.value = "";
 

}else{
    err.style.display = "block";
    setTimeout(() => {
       err.style.display = "none";
    }, 2000);
}
});   

// delete a task
//! onclick on the parent
taskList.addEventListener("click", (e) => {
    e.preventDefault();
    //! check if the clicked target is a delete button
    if (e.target.classList.contains("deleteBtn")){
         //! get the parent of that delete button
         //! remove the parent 
        e.target.parentElement.remove();
    
    }
   

}); 

// edit a task
//! click on the tasklist
taskList.addEventListener("click", (e) => {
    e.preventDefault();
    //! check if the target is having a class name of editBtn
    if (e.target.classList.contains("editBtn")) {
        //! get the parent of the editBtn
        //! ge the child of that parent that has a class name of disabled-task or HTML tag of input
        const input = e.target.parentElement.querySelector(".disabled-task");
        //!check if the input filled of the task is disabled
        input.disabled = !input.disabled;

        //!check again 
        if(!input.disabled) {
            input.focus();
        }
        //! make the input filled to be in focus
    }
});

// delete all tasks
//! click 
clearAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //! target all the innerHTML tasklist and make them empty string
    taskList.innerHTML = "";
});

// search task
//! add a keyup event on the search input field
inputSearch.addEventListener("keyup", (e) => {
    e.preventDefault();
    //! get the value from the search input 
//turn the search the vale or text to lowercase
const searchText = inputSearch.value.toLowerCase();
//! get all the li or task
const taskItems = document.querySelectorAll(".task");
//! loop through the li or tasks 
for (let i = 0; i < taskItems.length; i++){
    const liTask = taskItems[i];
    //! target the child of each looped li of type input or class of disabled  task 
//! get the value of the input or value of disabled task
//turn the value or text into lowerCase
const taskTextItem = liTask
    .querySelector(".disabled-task")
    .value.toLowerCase();

//!check if the search word is in the looped input filled
if (taskTextItem.indexOf(searchText) !== -1) {
    //! display it block or display it none.
    liTask.style.display = "block";
}else {
    liTask.style.display = "none";
}
}
});

