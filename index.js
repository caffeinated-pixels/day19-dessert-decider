const btn = document.getElementById('btn')
const foodHolder = document.getElementById('foodHolder')
const largeDessertDisplay = document.getElementById('large-dessert-img')
const prevDesserts = document.getElementById('prev-desserts')
btn.addEventListener('click', getDessert)

const apiUrl = 'https://foodish-api.herokuapp.com/api/images/dessert'
const dessertsArr = []

async function getDessert() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    checkIfRepeat(data.image)
  } catch (error) {
    console.log(error.message)
  }
}

function checkIfRepeat(img) {
  if (dessertsArr.indexOf(img) === -1) {
    displayDessert(img)
    dessertsArr.push(img)
    displayPrevDesserts()
  } else {
    getDessert()
  }
}

function displayDessert(imgUrl) {
  console.log(largeDessertDisplay)
  largeDessertDisplay.style.visibility = 'visible'
  largeDessertDisplay.src = imgUrl
}

function displayPrevDesserts() {
  prevDesserts.textContent = ''
  const fragment = document.createDocumentFragment()
  dessertsArr.forEach((dessert) => {
    const imgEl = document.createElement('img')
    imgEl.src = dessert
    imgEl.className = 'prev-dessert-img'
    imgEl.addEventListener('click', displayPrevImg)
    fragment.appendChild(imgEl)
  })

  prevDesserts.appendChild(fragment)
}

function displayPrevImg(e) {
  console.log(e.target.src)
}

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/
