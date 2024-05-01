// // Add your code here

import { characters } from "./02-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("button");
  const searchResult = document.getElementById("results");
  const searchInput = document.getElementById("searchInput");

  findButton.addEventListener("click", () => {
    // Empty the results container on new search
    searchResult.innerHTML = "";
    const searchQuery = searchInput.value.trim().toLowerCase();

    // If the search query is empty, prompt the user
    if (!searchQuery) {
      displayAlert("Please enter a search term.");
      return;
    }

    // Find and display matching characters
    const matches = characters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery)
    );
    matches.length > 0
      ? displayCharacters(matches, searchQuery)
      : displayAlert("No matching characters found.");
  });

  function displayCharacters(characters, searchQuery) {
    characters.forEach((char) => {
      const highlightedName = char.name.replace(
        new RegExp(searchQuery, "gi"),
        (match) => `<mark>${match}</mark>`
      );

      const card = document.createElement("div");
      card.className = "card col-12 col-md-4 col-lg-3 my-2";
      card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${highlightedName}</h5>
          <p class="card-text">Birth Year: ${char.birth_year}</p>
        </div>
      `;
      searchResult.appendChild(card);
    });
  }

  function displayAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-warning";
    alertDiv.textContent = message;
    searchResult.appendChild(alertDiv);
  }
});
