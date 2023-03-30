const myScreen = document.getElementById("screen");
const myButtonopenedpar = document.getElementById("buttonopenedpar");
const myButtonclosedpar = document.getElementById("buttonclosedpar");
const myButtonperc = document.getElementById("buttonperc");
const myButtonAC = document.getElementById("buttonAC");
const myButton7 = document.getElementById("button7");
const myButton8 = document.getElementById("button8");
const myButton9 = document.getElementById("button9");
const myButtondiv = document.getElementById("buttondiv");
const myButton4 = document.getElementById("button4");
const myButton5 = document.getElementById("button5");
const myButton6 = document.getElementById("button6");
const myButtonx = document.getElementById("buttonx");
const myButton1 = document.getElementById("button1");
const myButton2 = document.getElementById("button2");
const myButton3 = document.getElementById("button3");
const myButtonminus = document.getElementById("buttonminus");
const myButton0 = document.getElementById("button0");
const myButtondec = document.getElementById("buttondec");
const myButtonequal = document.getElementById("buttonequal");
const myButtonplus = document.getElementById("buttonplus");

let firstNumberEntered = false;

myButtonopenedpar.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "(";
})
myButtonclosedpar.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += ")";
})
myButtonperc.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "/100";
})
myButtonAC.addEventListener("click", () => {
    myScreen.value = "";
})
myButton7.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "7";
})
myButton8.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "8";
})
myButton9.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "9";
})
myButtondiv.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "/";
})
myButton4.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "4";
})
myButton5.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "5";
})
myButton6.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "6";
})
myButtonx.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "*";
})
myButton1.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "1";
})
myButton2.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "2";
})
myButton3.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "3";
})
myButtonminus.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "-";
})
myButton0.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "0";
})
myButtondec.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += ".";
})

myButtonplus.addEventListener("click", () => {
    if (!firstNumberEntered) {
        myScreen.value = "";
        firstNumberEntered = true;
    }
    myScreen.value += "+";
})
myButtonequal.addEventListener("click", () => {
    try {
      myScreen.value = eval(myScreen.value);
    } catch (error) {
      myScreen.value = "Error";
      console.error(error);
    }
  });

  
  