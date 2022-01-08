//--------------------------------- Flexbox Container ---------------------------------
let flexbox_container = document.querySelector(".flexbox-container");
const allColsArr = Array.from(document.querySelectorAll(".col"));
const allRowsArr = Array.from(document.querySelectorAll(".row"));

//------------------------------ Center Buttons (Rows + Columns) ----------------------
const addRowButton = document.querySelector(".add-row");
const removeRowButton = document.querySelector(".remove-row");
const resetButton = document.querySelector(".reset");
const addColButton = document.querySelector(".add-col");
const removeColButton = document.querySelector(".remove-col");

//Closes issue #2
removeRowButton.onclick = function () {
  flexbox_container.removeChild(allRowsArr.pop());
};

//Closes issue #3
resetButton.onclick = function () {
  location.reload();
};

//Closes issue #4
removeColButton.onclick = function () {
  allRowsArr.map((element) => {
    element.lastElementChild.remove();
  });
};

//------------------- Form Colors + Submit Buttons ------------------------------------
const first_form_color = document.querySelector("#first-form-color");
const second_form_color = document.querySelector("#second-form-color");
const third_form_color = document.querySelector("#third-form-color");
const fourth_form_color = document.querySelector("#fourth-form-color");

const second_form_submit = document.querySelector(".second-form-submit");
console.log(second_form_submit);

const third_form_submit = document.querySelector(".third-form-submit");
console.log(third_form_submit);

const fourth_form_submit = document.querySelector(".fourth-form-submit");
console.log(fourth_form_submit);

//Closes issue #6
allColsArr.map((element) => {
  element.addEventListener("click", function () {
    element.style.backgroundColor = first_form_color.value;
  });
});
