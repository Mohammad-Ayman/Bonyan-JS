import { addDragStart as dragStart } from "./drag.js";
// Global variables
const addBtns = document.querySelectorAll(".add-btn");
const deleteBtns = document.querySelectorAll(".delete-icon");

// Global functions

let idCount = 0;
const addEntry = () => {
  console.log("Adding new entry");
  const newLi = document.createElement("li");
  newLi.setAttribute("draggable", "true");
  newLi.classList.add("flex");
  newLi.id = idCount.toString();
  newLi.innerHTML = `<input type="text" name="" id="${idCount}" placeholder="Type a task..."/>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>`;
  console.log("New li:", newLi);
  idCount++;
  return newLi;
};

const renderEntry = (target) => {
  const newLi = addEntry();
  const closestUl = target.parentElement.querySelector("ul");
  console.log("Closest ul:", closestUl);
  closestUl.appendChild(newLi);

  // attach delete button to new entries
  addDeleteToNewEntry(newLi);
  dragStart(newLi);
};

const addDeleteToNewEntry = (newLi) => {
  const newDeleteBtn = newLi.querySelector(".delete-icon");
  newDeleteBtn.addEventListener("click", deleteHandler);
};

// Handler functions
const btnHandler = (event) => {
  const button = event.target;
  renderEntry(button);
};

const deleteHandler = (event) => {
  console.log(`Deleting the entry`);
  console.log(event.target.closest("li"));
  event.target.closest("li").remove();
};

export { addBtns, deleteBtns, btnHandler, deleteHandler };
