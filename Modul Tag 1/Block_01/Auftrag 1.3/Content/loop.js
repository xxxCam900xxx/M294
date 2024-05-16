let console = document.getElementById("console");

for (let num = 1; num <= 30; num++) {
  setTimeout(() => {
    let element = document.createElement("p");
    let text = "";
    
    if (num % 3 === 0 && num % 5 === 0) {
      text = "FizzBuzz";
    } else if (num % 3 === 0) {
      text = "Fizz";
    } else if (num % 5 === 0) {
      text = "Buzz";
    } else {
      text = num.toString();
    }
    
    element.innerText = text;
    console.appendChild(element);
  }, num * 500);
}