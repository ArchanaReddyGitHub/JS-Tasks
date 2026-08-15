//Q1: Fibonacci Series

function fibonacci(n) {
  // Base condition
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  // Recursive call
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function displayFibonacci() {
  let n = parseInt(document.getElementById("num").value);

  let number = n.split().reverse().join();
  if (number == n) {
  }

  // for (let i = 0; i < n; i++) {
  //   result = result + fibonacci(i) + " ";
  // }

  document.getElementById("fibonacciResult").innerHTML =
    " Fibonacci Series of Given Number is: " + result;
}

//2.0 Palindrome Reverse
function palindrome() {
  let txt = document.getElementById("text").value.trim();

  if (txt === "") {
    document.getElementById("palindomeResult").innerHTML =
      "Please enter some text";
    return;
  }

  let str = txt.split("").reverse().join("");
  if (str === txt) {
    str = "palindrome";
  } else {
    str = "not a palindrome";
  }

  document.getElementById("palindomeResult").innerHTML =
    ` ${txt} is :  ${str} `;
  console.log(txt);
}

// Q2: Palindrome
function isPalindrome(str, start, end) {
  // Base condition
  if (start >= end) {
    return true;
  }

  // Characters are different
  if (str[start] !== str[end]) {
    return false;
  }

  // Recursive call
  return isPalindrome(str, start + 1, end - 1);
}

function palindromeUsingPrompt() {
  let str = prompt("Enter a string:");

  if (str === null) {
    return;
  }

  let result = isPalindrome(str, 0, str.length - 1);

  if (result === true) {
    alert(str + " is a Palindrome");
  } else {
    alert(str + " is Not a Palindrome");
  }
}

// Q3: Digital Clock
function displayClock() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
}

// Call function immediately
displayClock();

// Update clock every 1 second
setInterval(displayClock, 1000);

// Q4: Palindrome using DOM
function checkPalindromeDOM() {
  let str = document.getElementById("palindromeDOM").value;

  let result = isPalindrome(str, 0, str.length - 1); //from Q2 function calling here

  if (result === true) {
    document.getElementById("palindromeResult").innerHTML =
      str + ":  is a Palindrome";
  } else {
    document.getElementById("palindromeResult").innerHTML =
      str + ":  is Not a Palindrome";
  }
}
