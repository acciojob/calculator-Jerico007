//your code here
const output = document.getElementsByClassName("output-display")[0];

const buttons = document.getElementsByTagName("button");

// console.log(buttons);
Array.from(buttons).forEach((val) =>
  val.addEventListener("click", buttonInputs)
);

function buttonInputs(e) {
  let id = e.target.id;

  if (id === "clr") {
    output.innerText = "";
  } else if (id === "back") {
    backButton();
  } else if (id === "plus") {
    Add();
  } else if (id === "minus") {
    Minus();
  }
  else if(id ==="divide")
  {
    Divide();
  }
   else if (id === "multiply") {
    Multiply();
  } else if (id === "dot") {
    Dot();
  } else if (id === "open-bracket") {
    OpenBracket();
  } else if (id === "close-bracket") {
    CloseBracket();
  } else if (id === "ans") {
    ansButton();
  } else {
    getNumber(e.target.id);
  }
}

function getNumber(id) {
  console.log(id);
  if (id === "block9") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0") {
      str = "";
    }
    str += "9";
    output.innerText = str;
  } else if (id === "block8") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0") {
      str = "";
    }
    str += "8";
    output.innerText = str;
  } else if (id === "block7") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "7";
    output.innerText = str;
  } else if (id === "block6") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "6";
    output.innerText = str;
  } else if (id === "block5") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "5";
    output.innerText = str;
  } else if (id === "block4") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "4";
    output.innerText = str;
  } else if (id === "block3") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "3";
    output.innerText = str;
  } else if (id === "block2") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "2";
    output.innerText = str;
  } else if (id === "block1") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      str = "";
    }
    str += "1";
    output.innerText = str;
  } else if (id === "block0") {
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
      return;
    }
    str += "0";
    output.innerText = str;
  }
}

function Dot() {
  let str = output.innerText;
  str += ".";
  output.innerText = str;
}

function Multiply() {
  let str = output.innerText;
  str += "*";
  output.innerText = str;
}

function Minus() {
  let str = output.innerText;
  if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
    str = "";
  }
  str += "-";
  output.innerText = str;
}
function OpenBracket(){
    let str = output.innerText;
    if (str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity") {
        str = "";
      }
    str += "(";
    output.innerText = str;
}

function CloseBracket(){
    let str = output.innerText;
    if(str.length === 1 && str[0] === "0" || str === "NaN" || str === "Infinity")
    {
        return;
    }
    str += ")";
    output.innerText = str;
}
function Divide() {
    let str = output.innerText;
    str += "/";
    output.innerText = str;
  }
  
function Add() {
  let str = output.innerText;
  str += "+";
  output.innerText = str;
}

function backButton() {
  let str = output.innerText;

  str = str.split("");
  str.pop();

  str = str.join("");

 
    output.innerText = str;

}

function ansButton() {
    let ans = "";

    if(output.innerText.length === 1 && output.innerText === "0" ||output.innerText  === "NaN" ||output.innerText  === "Infinity")
    {
        return;
    }

    ans = eval(output.innerText);

    output.innerText =  ans;
}
