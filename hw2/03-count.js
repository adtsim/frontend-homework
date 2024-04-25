const input = document.getElementById("userInput");
const paragraph = document.getElementById("textContainer").innerHTML;

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown() {
  const searchWord = input.value;
  let regex = new RegExp(searchWord, "gi");

  if (searchWord !== "") {
    let wordMatch = paragraph.replaceAll(regex, (match) => {
      return `<span class='highlight'>${match}</span>`;
    });
    document.getElementById("textContainer").innerHTML = wordMatch;
  } else {
    document.getElementById("textContainer").innerHTML = paragraph;
  }
}
