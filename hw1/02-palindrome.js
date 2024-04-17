const inputElement = document.querySelector("input");

inputElement.addEventListener("input", isNumPalindrome);

function isNumPalindrome() {
  var num = document.getElementById("number").value;

  result.textContent = "";

  if (num === "") {
    return;
  }

  if (num >= 0) {
    var reversedNum = parseInt(num.toString().split("").reverse().join(""));

    if (parseInt(num) === reversedNum) {
      document.getElementById("result").textContent =
        "Yes. This is a palindrome!";
      document.getElementById("result").style.color = "green";
    } else {
      document.getElementById("result").textContent = "No. Try again.";
      document.getElementById("result").style.color = "red";
    }
  } else {
    document.getElementById("result").textContent =
      "Please enter a positive number.";
    document.getElementById("result").style.color = "red";
  }
}
