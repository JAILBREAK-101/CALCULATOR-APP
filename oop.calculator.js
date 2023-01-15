// OBJECT ORIENTED APPROACH.
let buttons_sections = document.querySelector(".computation-section");
let all_buttons = document.querySelectorAll("button");
let display_value = document.querySelector(".value-box");
let num_keys = document.querySelectorAll(".num-keys");
let operator = document.querySelectorAll(".operator");
let functional_buttons = document.querySelectorAll(".functionals");
let equal_to_button = document.querySelector(".equal-to");

class Calculator {
  constructor(display_screen) {
    this.display_screen = display_screen;
  }

  append_operator(element) {
    // add any operator that the user clicks to the screen, either before or after the user clicks on
    // if (
    //   this.display_screen.innerText.includes(".") == true &&
    //   this.display_screen.innerText.indexOf(".") != -1
    // ) {
    //   return;
    // }
    this.display_screen.innerText =
      this.display_screen.innerText + element.innerText;
  }

  reset() {
    // CLEAR ALL OPERANDS FROM THE SCREEN, WHEN THE RESET BUTTON IS CLICKED
    this.display_screen.innerText = "";
    // LET THE FONTSIZE BE CHANGED BACK TO NORMAL.
    this.display_screen.style.fontSize = "32px";
    this.display_screen.style.padding = "23.04px";
  }

  delete_character() {
    // REMOVE PRE ELEMENT, AS DEL BUTTON IS CLICKED.
    // let new_display = display_value.innerText.replace(button, "");
    let new_display = this.display_screen.innerText.slice(
      0,
      this.display_screen.innerText.length - 1
    );

    if (this.display_screen.innerText == undefined) {
      this.reset();
    }

    this.display_screen.innerText = new_display;
  }

  compute() {
    // If there's anything on the screen (evaluate it)
    try {
      if (this.display_screen.innerText.length != 0) {
        this.display_screen.innerText = eval(this.display_screen.innerText);
      } else if (!eval(this.display_screen.innerText)) {
        this.display_screen.innerText = undefined;
      }
    } catch (error) {
      this.display_screen.innerText = undefined;
    }
    // the above is for checking our computations, if they are valid or not.
  }

  clear_for_new() {
    // AFTER THE USER HAS GENRATED ANSWER, CLEAR FOR NEW INPUT.
    this.display_value.innerText = "";
  }
}

onchange = function () {
  my_calculator.clear_for_new();
};

let my_calculator = new Calculator(display_value);

num_keys.forEach((button) => {
  button.addEventListener("click", (e) => {
    let target = e.target;
    display_value.innerText += target.innerText;

    if (display_value.innerText.length == 0) {
      display_value.style.fontSize = "32px";
    }
    if (display_value.innerText.length > 22) {
      display_value.style.fontSize = "20px";
    }
    if (display_value.innerText.length > 40) {
      display_value.style.fontSize = "15px";
    }
  });
});

operator.forEach((each_operator) => {
  each_operator.addEventListener("click", (e) => {
    let target_operator = e.target;
    my_calculator.append_operator(target_operator);
  });
});

equal_to_button.addEventListener("click", () => {
  my_calculator.compute();
});

functional_buttons[0].addEventListener("click", () => {
  my_calculator.delete_character();
});

functional_buttons[1].addEventListener("click", () => {
  my_calculator.reset();
});
