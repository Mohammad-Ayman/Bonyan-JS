// Global variables
const liElements = document.querySelectorAll("li");
const ulElements = document.querySelectorAll("ul");

//GLobal Functions
const addDragStart = (newLi) => {
  newLi.addEventListener("dragstart", dragStart);
  newLi.addEventListener("dragend", dragEnd);
  newLi.addEventListener("dragover", dragOver);
};

//Drag Drop Functions
const dragStart = (e) => {
  console.log("Drag started");
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.style.opacity = "0.5";
};

const dragEnd = (e) => {
  e.target.style.opacity = "1";
  // e.target.style.backgroundColor = "#fff";
};

const dragOver = (e) => {
  e.preventDefault();
  // console.log("Over ", e.target.parentElement);
  e.dataTransfer.dropEffect = "move";
  // e.target.style.opacity = "0.8";
  // e.target.classList.add("highlight");
  // e.target.parentElement.classList.add("highlight");
};

const dropHandler = (e) => {
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  const dropTarget = e.target.closest("li");
  if (dropTarget) {
    const liHeight = dropTarget.clientHeight;
    const offsetY = e.offsetY;
    if (offsetY >= liHeight / 2) {
      dropTarget.parentNode.insertBefore(draggable, dropTarget.nextSibling);
    } else {
      dropTarget.parentNode.insertBefore(draggable, dropTarget);
    }
  } else {
    e.target.closest("ul").appendChild(draggable);
  }
};

export {
  liElements,
  ulElements,
  addDragStart,
  dragStart,
  dragEnd,
  dragOver,
  dropHandler,
};
