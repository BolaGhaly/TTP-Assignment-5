//--------------------------------- Flexbox Container ---------------------------------
let flexbox_container = document.querySelector(".flexbox-container");
let allColsArr = Array.from(document.querySelectorAll(".col"));
let allRowsArr = Array.from(document.querySelectorAll(".row"));

//All the boxes will have a background color of "white" at the start
allColsArr.forEach((element) => {
  element.style.backgroundColor = "white";
});

//------------------------------ Center Buttons (Rows + Columns) ----------------------
const addRowButton = document.querySelector(".add-row");
const removeRowButton = document.querySelector(".remove-row");
const resetButton = document.querySelector(".reset");
const removeColButton = document.querySelector(".remove-col");
const addColButton = document.querySelector(".add-col");

//Closes issue #1
addRowButton.onclick = function () {
  let addNewRow = document.createElement("div");
  addNewRow.classList = "row";

  for (let i = 0; i < allColsArr.length / allRowsArr.length; i++) {
    let addNewCol = document.createElement("div");
    addNewCol.classList =
      "col box d-flex justify-content-center align-items-center";
    addNewCol.innerHTML = "Column";
    addNewCol.style.backgroundColor = "white";
    addNewRow.appendChild(addNewCol);
  }
  flexbox_container.appendChild(addNewRow);

  //Update arrays
  allColsArr = Array.from(document.querySelectorAll(".col"));
  allRowsArr = Array.from(document.querySelectorAll(".row"));

  //Closes issue #6
  allColsArr.forEach((element) => {
    element.addEventListener("click", function () {
      element.style.backgroundColor = first_form_color.value;
    });
  });
};

//Closes issue #2
removeRowButton.onclick = function () {
  flexbox_container.removeChild(allRowsArr.pop());

  //Update arrays
  allColsArr = Array.from(document.querySelectorAll(".col"));
  allRowsArr = Array.from(document.querySelectorAll(".row"));
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

  //Update arrays
  allColsArr = Array.from(document.querySelectorAll(".col"));
  allRowsArr = Array.from(document.querySelectorAll(".row"));
};

//Closes issue #5
addColButton.onclick = function () {
  allRowsArr.map((element) => {
    let addNewCol = document.createElement("div");
    addNewCol.classList =
      "col box d-flex justify-content-center align-items-center";
    addNewCol.innerHTML = "Column";
    addNewCol.style.backgroundColor = "white";
    element.appendChild(addNewCol);
  });

  //Update arrays
  allColsArr = Array.from(document.querySelectorAll(".col"));
  allRowsArr = Array.from(document.querySelectorAll(".row"));

  //Closes issue #6
  allColsArr.forEach((element) => {
    element.addEventListener("click", function () {
      element.style.backgroundColor = first_form_color.value;
    });
  });
};

//------------------- Form Colors + Submit Buttons ------------------------------------
const first_form_color = document.querySelector("#first-form-color");
const second_form_color = document.querySelector("#second-form-color");
const third_form_color = document.querySelector("#third-form-color");
const fourth_form_color = document.querySelector("#fourth-form-color");

const second_form_submit = document.querySelector(".second-form-submit");
const third_form_submit = document.querySelector(".third-form-submit");
const fourth_form_submit = document.querySelector(".fourth-form-submit");

//Closes issue #6
allColsArr.forEach((element) => {
  element.addEventListener("click", function () {
    element.style.backgroundColor = first_form_color.value;
  });
});

//Closes issue #7
second_form_submit.onclick = function () {
  allColsArr.forEach((element) => {
    if (element.style.backgroundColor == "white") {
      element.style.backgroundColor = second_form_color.value;
    }
  });
};

//Closes issue #8
third_form_submit.onclick = function () {
  allColsArr.forEach((element) => {
    element.style.backgroundColor = third_form_color.value;
  });
};

//Closes issue #9
let fourth_form_isClicked = false;

fourth_form_submit.onclick = function () {
  fourth_form_isClicked = !fourth_form_isClicked;

  if (fourth_form_isClicked === true) {
    let isMouseDown;
    fourth_form_submit.value = "Click again to Stop!";
    allColsArr.forEach((element) => {
      element.addEventListener("mousedown", function () {
        isMouseDown = true;
        if (fourth_form_submit.value != "Do it!") {
          element.style.backgroundColor = fourth_form_color.value;
        }
      });
      element.addEventListener("mouseover", function () {
        if (isMouseDown == true && fourth_form_submit.value != "Do it!") {
          element.style.backgroundColor = fourth_form_color.value;
        }
      });
      element.addEventListener("mouseup", function () {
        isMouseDown = false;
        if (fourth_form_submit.value != "Do it!") {
          element.style.backgroundColor = fourth_form_color.value;
        }
      });
    });
  } else if (fourth_form_isClicked === false) {
    fourth_form_submit.value = "Do it!";
  }
};