import {
  addBtns,
  deleteBtns,
  btnHandler,
  deleteHandler,
} from "./assets/scripts/tasks.js";
import {
  liElements,
  ulElements,
  dragStart,
  dragEnd,
  dragOver,
  dropHandler,
} from "./assets/scripts/drag.js";

// eventListeners
addBtns.forEach((btn) => btn.addEventListener("click", btnHandler));
deleteBtns.forEach((btn) => btn.addEventListener("click", deleteHandler));

liElements.forEach((liElement) => {
  liElement.addEventListener("dragstart", dragStart);
  liElement.addEventListener("dragend", dragEnd);
  // liElement.addEventListener("dragover", dragOver);
});

ulElements.forEach((ulElement) => {
  ulElement.addEventListener("drop", dropHandler);
  ulElement.addEventListener("dragover", dragOver);
});
