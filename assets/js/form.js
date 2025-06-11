let startTime
const form = document.getElementById("contactForm")
const confirmation = document.getElementById("confirmation")
const timeSpent = document.getElementById("timeSpent")
// Start timing when user focuses on any form field
form.addEventListener("focusin", () => {
  if (!startTime) {
    startTime = new Date()
  }
})
// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const endTime = new Date()
  const timeInSeconds = Math.round((endTime - startTime) / 1000)
  // Format time message
  let timeMessage = `Time taken to fill the form: ${timeInSeconds} seconds.`
  if (timeInSeconds >= 60) {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    timeMessage = `Time taken to fill the form: ${minutes} minute${minutes > 1 ? "s" : ""} and ${seconds} second${seconds !== 1 ? "s" : ""}.`
  }
  // Show confirmation and time spent
  confirmation.innerHTML = "Thank you! Your message has been sent."
  timeSpent.innerHTML = timeMessage
  confirmation.classList.add("show")
  timeSpent.classList.add("show")
  // Reset form and timer
  form.reset()
  startTime = null
})
// Star Rating
const starRating = document.getElementById("starRating")
const stars = document.querySelectorAll(".star-rating span")
const result = document.getElementById("ratingResult")

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value")
    result.textContent = `You rated: ${value} star${value > 1 ? "s" : ""}`
    // Reset all stars
    stars.forEach((s) => s.classList.remove("active"))
    // Set active stars
    let currentStar = star
    while (currentStar) {
      currentStar.classList.add("active")
      currentStar = currentStar.nextElementSibling
    }

    starRating.classList.add("selected")
  })
})
