const inputElement = document.querySelector("input");

inputElement.addEventListener("input", isNumPalindrome);

function isNumPalindrome() {
  const num = document.getElementById("number").value;
  const result = document.getElementById("result");

  result.textContent = "";

  if (num === "") {
    return;
  }

  if (num < 0 || isNaN(num)) {
    result.textContent = "Please enter a positive number.";
    result.style.color = "red";
    return;
  } else {
    const reversedNum = parseInt(num.toString().split("").reverse().join(""));

    if (parseInt(num) === reversedNum) {
      result.textContent = "Yes. This is a palindrome!";
      result.style.color = "green";
    } else {
      result.textContent = "No. Try again.";
      result.style.color = "red";
    }
  }
}
