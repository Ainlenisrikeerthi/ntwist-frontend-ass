function sortList() {
  const ul = document.getElementById("nameList")
  const items = Array.from(ul.querySelectorAll("li"))

  // Sort the items alphabetically
  items.sort((a, b) => a.textContent.localeCompare(b.textContent))

  // Clear the list
  ul.innerHTML = ""

  // Add items back in sorted order
  items.forEach((item) => ul.appendChild(item))

  // Visual feedback that sorting happened
  ul.style.backgroundColor = "#f0f9ff"
  setTimeout(() => {
    ul.style.backgroundColor = ""
  }, 500)
}
